// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

function lengthOfLastWord(s: string): number {
  let i = s.length;
  while (i > 0 && s[i - 1] !== " ") {
    i--;
  }
  return s.length - i;
}
console.log(lengthOfLastWord("1 A Hello"));
