type FilterFn<T> = (v: T, index?: number, self?: Array<T>) => boolean;

declare global {
  interface Array<T> {
    myFilter: (fn: FilterFn<T>) => Array<T>;
  }
}

function* generateFilterIterator<T>(arr: Array<T>, fn: FilterFn<T>) {
  for (const [i, v] of arr.entries()) {
    if (fn(v, i, arr)) {
      yield v;
    }
  }
}

Array.prototype.myFilter = function (fn) {
  const iterator = generateFilterIterator(this, fn);
  return [...iterator];
};
