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

let facorial = (function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
});
/**
 * 以上代码创建了一个名为f() 的命名函数表达式,然后将它赋值给变量 facoial;即便把函数赋值给了另一个变量,函数的名字f仍然有效,所以递归调用照样能正确完成.这种在严格和非严格模式下都行得通;
 */

 // 闭包
 /**
  * 有不少开发人员总是搞不清闭包函数和闭包这两个概念,因此经常混用.闭包是指有权访问另一个作用域中的变量的函数.创建闭包的常见方式,就是在一个函数内部创建另一个函数;
  */

  function createComparisionFunction(propertyName) {
    return function(obj1, obj2) {
      let value1 = obj1[propertyName];
      let value2 = obj2[propertyName];
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    }
  };
  /**
   * 在这个例子中 value1和value2是函数中的代码,这两个变量访问了外部函数中的变量propertyName.即使这个内部函数被返回了,而且在其他地方被调用了,但它仍可以访问变量propertyName.之所以还能够访问这个变量;
   */