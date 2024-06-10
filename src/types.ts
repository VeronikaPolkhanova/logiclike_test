export interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: Array<string>;
}

export interface ICoursesProps {
  selected: string;
  tags: Array<string>;
  selectedCourses: Array<ICourse>;
  selectTag: (tag: string) => void;
}

export interface ISwitcherProps {
  tags: Array<string>;
  selected: string;
  selectTag: (tag: string) => void;
}
