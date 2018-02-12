// 函数表达式
// 函数声明, 函数表达式
sayHi();
let sayHi = function () {
  console.log('hi')
}
/**
 * 理解函数提升的关键,就是理解函数声明与函数表达式之间的区别.
 */
// 不要这样做

if (condition) {
  function sayHi() {
    console.log('hi')
  }
} else {
  function sayHi() {
    console.log('yo!');
  }
}

// 可以这样做
let sayHello = null;
if (condition) {
  sayHello = function() {
    console.log('Hello');
  }
} else {
  sayHello = function() {
    console.log('You');
  }
}

// 递归
function factorial(num) {
  switch(num) {
    case num <= 1:
      console.log(123);
      break;
    case num > 1:
      console.log(234);
      break;
    default:
      return num * factorial(num - 1);
  }
}
function digui(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * digui(num - 1);
  }
}
let anotherDigui = digui;
digui = null;
console.log(anotherDigui(4)); // 出错