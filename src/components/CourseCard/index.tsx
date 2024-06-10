import { ICourse } from "../../types";
import classes from "./course.module.scss";

const CourseCard = ({ name, image, bgColor }: ICourse) => {
  return (
    <div className={classes.container}>
      <div className={classes.colorBlock} style={{ background: bgColor }}>
        <img src={image} alt={image} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default CourseCard;
