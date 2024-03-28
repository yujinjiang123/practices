// https://leetcode.cn/problems/merge-sorted-array/

// 逆向双指针
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let k = m + n;
  // 扩容
  nums1.length = m + n;
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[--k] = nums1[--m];
    } else {
      nums1[--k] = nums2[--n];
    }
  }
  console.log(m, n, arr1);
  while (m > 0) {
    nums1[--k] = nums1[--m];
  }
  while (n > 0) {
    nums1[--k] = nums2[--n];
  }
}

const arr1 = [1, 3, 4, 5, 6, 7];
const arr2 = [2, 3, 5, 6, 9, 10, 12];
merge(arr1, arr1.length, arr2, arr2.length);
console.log(arr1);
