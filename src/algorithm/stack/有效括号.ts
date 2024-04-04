const map: Record<string, string> = {
  "]": "[",
  ")": "(",
  "}": "{",
};
function isValid(s: string): boolean {
  const arr = s.split("");
  const stack: string[] = [];
  for (let i of arr) {
    if (map[i]) {
      const v = stack.pop();
      if (v !== map[i]) {
        return false;
      }
    } else {
      stack.push(i);
    }
  }
  return stack.length === 0;
}

console.log(isValid("[{(())}]"));
