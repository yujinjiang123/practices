function getBackOrder(preorder: number[]): number[] {
  if (preorder.length === 0) {
    return [];
  }
  if (preorder.length === 1) {
    return preorder;
  }
  const subLength = preorder.length >> 1;
  const leftPreorder = preorder.slice(1, subLength + 1);
  const rightPreorder = preorder.slice(subLength + 1);
  return [
    ...getBackOrder(leftPreorder),
    ...getBackOrder(rightPreorder),
    preorder[0],
  ];
}

console.log(getBackOrder([1, 2, 3]));
