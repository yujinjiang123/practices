type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  const result: T[] = [];
  let count = 0;
  let length = functions.length;
  return new Promise<T[]>((resolve, reject) => {
    for (const [index, fn] of functions.entries()) {
      fn().then((res) => {
        result[index] = res;
        count++;
        if (count === length) {
          resolve(result);
        }
      }, reject);
    }
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
