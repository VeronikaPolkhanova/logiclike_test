export interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export interface ICoursesProps {
  selected: string;
  tags: string[];
  selectedCourses: ICourse[];
  selectTag: (tag: string) => void;
}

export interface ISwitcherProps {
  tags: string[];
  selected: string;
  selectTag: (tag: string) => void;
}
