function jump(nums: number[]): boolean {
  let maxJump = 0;
  let opt = 0;
  for (let i = 0, length = nums.length; i < length; i++) {
    if (maxJump < i) {
      return false;
    }
    maxJump = Math.max(maxJump, i + nums[i]);
  }
  return true;
}

[
  [2, 3, 1, 1, 4],
  [3, 2, 1, 0, 4],
].forEach((e) => console.log(canJump(e)));
