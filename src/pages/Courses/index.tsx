import classes from "./courses.module.scss";
import Switcher from "../../components/Switcher";
import CourseCard from "../../components/CourseCard";
import { ICoursesProps } from "../../types";

const Courses = ({
  selectedCourses,
  selectTag,
  selected,
  tags,
}: ICoursesProps) => {
  const coursesGrid = (
    <div className={classes.cardsContainer}>
      {selectedCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );

  return (
    <div className={classes.container}>
      <Switcher tags={tags} selected={selected} selectTag={selectTag} />
      {coursesGrid}
    </div>
  );
};

export default Courses;
