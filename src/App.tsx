import { useCallback, useEffect, useState } from "react";

import Courses from "./pages/Courses";
import { ALL_TAGS } from "./constants";
import { ICourse } from "./types";
import findUnique from "./helpers/findUnique";

function App() {
  const [isError, setError] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [selected, setSelected] = useState<string>(ALL_TAGS);
  const [selectedCourses, setSelectedCourses] = useState<ICourse[]>([]);

  const getApiData = useCallback(
    () =>
      fetch("https://logiclike.com/docs/courses.json")
        .then((response) => response.json())
        .then((result) => {
          setCourses(result);
          setSelectedCourses(result);
          const resultTags = result.map(({ tags }: ICourse) => tags).flat();
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
    getApiData();
  }, [getApiData]);

  if (isError) return <h1>Something wrong</h1>;

  return (
    <div className="App">
      <Courses
        selectedCourses={selectedCourses}
        selectTag={selectTag}
        selected={selected}
        tags={tags}
      />
    </div>
  );
}

export default App;
