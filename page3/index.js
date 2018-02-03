// 数值范围
console.log(null == undefined);
console.log(null === undefined);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(result);
console.log(isFinite(result));

// NAN

console.log(NaN === NaN);

//  数值转换
console.log(Number(undefined)); // NAN
console.log(Number('0001'));
console.log(Number('hello world'));