import { ISwitcherProps } from "../../types";
import classes from "./switcher.module.scss";

const Switcher = ({ tags, selected, selectTag }: ISwitcherProps) => {
  const renderTags = (
    <ul className={classes.container}>
      {tags.map((tag: string) => (
        <li
          key={tag}
          className={`${selected === tag ? classes.active : ""}`}
          onClick={() => selectTag(tag)}>
          {tag}
        </li>
      ))}
    </ul>
  );

  return renderTags;
};

export default Switcher;
