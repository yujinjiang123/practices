// https://leetcode.cn/problems/join-two-arrays-by-id/description/
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const map: Map<number, ArrayType> = new Map();
  [...arr1, ...arr2].map((e) =>
    map.set(e.id, Object.assign(map.get(e.id) ?? {}, e)),
  );
  return Array.from(map.values());
}
