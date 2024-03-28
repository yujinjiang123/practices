declare global {
  interface Array<T> {
    myGroupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.myGroupBy = function (fn) {
  const map: Record<string, any[]> = {};
  for (const i of this) {
    const key = fn(i);
    if (map?.[key]) {
      map[key].push(i);
    } else {
      map[key] = [i];
    }
  }
  return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
