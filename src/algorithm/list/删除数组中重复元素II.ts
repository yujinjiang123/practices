// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
function removeDuplicates(nums: number[]): number {
  const length = nums.length;
  if (length <= 2) {
    return length;
  }
  let slow = 2;
  let fast = 2;
  while (fast < length) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
}

const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4];
removeDuplicates(nums);
console.log(nums);
