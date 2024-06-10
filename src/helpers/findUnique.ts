const findUnique = (arr: string[]) => {
  return arr.filter(
    (element: string, index: number) => arr.indexOf(element) === index
  );
};

export default findUnique;
