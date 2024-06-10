import { useCallback, useEffect, useState } from "react";

import Courses from "./pages/Courses";
import { ALL_TAGS } from "./constants";
import { ICourse } from "./types";
import findUnique from "./helpers/findUnique";

function App() {
  const [isError, setError] = useState(false);
  const [courses, setCourses] = useState<Array<ICourse>>([]);
  const [selectedCourses, setSelectedCourses] = useState<Array<ICourse>>([]);
  const [selected, setSelected] = useState<string>(ALL_TAGS);
  const [tags, setTags] = useState<Array<string>>([]);

  const getApiData = useCallback(
    () =>
      fetch("https://logiclike.com/docs/courses.json")
        .then((response) => response.json())
        .then((result) => {
          setCourses(result);
          setSelectedCourses(result);
          const resultTags = result.map(({ tags }: any) => tags).flat();
          setTags([ALL_TAGS, ...findUnique(resultTags)]);
        })
        .catch(() => setError(true)),
    []
  );

  const selectTag = useCallback(
    (tag: string) => {
      setSelected(tag);
      if (tag === ALL_TAGS) {
        setSelectedCourses(courses);
        return;
      }
      const selectedCourses = courses.filter((course: ICourse) =>
        course.tags.includes(tag)
      );
      setSelectedCourses(selectedCourses);
    },
    [courses]
  );

  useEffect(() => {
    if (!courses.length) getApiData();
  }, [courses, getApiData]);

  const state = {
    selectedCourses,
    selectTag,
    selected,
    tags,
  };

  return (
    <div className="App">
      {isError ? <h1>Something wrong</h1> : <Courses {...state} />}
    </div>
  );
}

export default App;
