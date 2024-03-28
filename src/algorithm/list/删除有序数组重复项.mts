// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
  let i = 0;
  let j = 1;
  for (let length = nums.length; j < length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j];
    }
  }
  nums.length = i + 1;
  return i + 1;
}
