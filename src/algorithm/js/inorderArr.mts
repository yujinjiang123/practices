type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
  arr: MultidimensionalArray,
): Generator<number, void, unknown> {
  for (const i of arr) {
    if (Array.isArray(i)) {
      yield* inorderTraversal(i);
    } else {
      yield i;
    }
  }
}
