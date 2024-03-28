type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const res: Obj[][] = [];
  let i = 0;
  const length = arr.length;
  while (i < length) {
    res.push(arr.slice(i, i + size));
    i += size;
  }
  return res;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9] as any, 4));
