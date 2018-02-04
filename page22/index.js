function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
let arr = [1,2,3];
console.log(isArray(arr));