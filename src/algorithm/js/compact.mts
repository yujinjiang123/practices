type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    const res: Obj = [];
    for (const i of obj) {
      if (Boolean(i)) {
        res.push(i);
      }
    }
  }
  return void 0;
}
