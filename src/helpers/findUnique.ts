const findUnique = (arr: Array<string>) => {
  return arr.filter(
    (element: string, index: number) => arr.indexOf(element) === index
  );
};

export default findUnique;
