type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function* flatten(arr: MultiDimensionalArray, n = 1): any {
  let deep = n < 0 ? 1 : n;
  for (let i of arr) {
    if (Array.isArray(i) && deep) {
      yield* flatten(i, deep - 1);
    } else {
      yield i;
    }
  }
}

function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  return [...flatten(arr, n)];
}

console.log(flat([1, 2, 3, [4, 5, [6, 7, [8]]]], 1));
