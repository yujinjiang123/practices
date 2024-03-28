// https://leetcode.cn/problems/check-if-object-instance-of-class/description/
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (typeof obj !== "object") {
    return false;
  }
  let proto = obj.__proto__;
  while (proto) {
    if (proto === classFunction.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
