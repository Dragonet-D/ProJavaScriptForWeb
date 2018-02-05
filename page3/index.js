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

let num1 = parseInt('123blue');
console.log(num1);
console.log(parseInt("0XA"));

// Object类型

/**
 * ECMAScript 中的对象其实就是一组数据和功能的集合。对象可以通过执行new 操作符后跟要创建的对象类型的名称来创建。而创建object类型的实例并为其添加属性和（或）方法，就可以创建自定义对象。
 */
let o =  new Object();
/**
 * 
 * Object 的每个事例都具有下列属性和方法；
 * constructer： 保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructer）就是object（）；
 * hasownproperty(propertyName): 用于检查给定的属性在当前对象实例中（而不是在实例原型中）是否存在。其中，作为参数的属性名（propertynName）必须是以字符串形式指定。
 * isPrototypeOf(object): 用于检查传入的对象是否是传入对象的原型。
 * toLocalString(): 返回对象的字符串表示，该字符串与执行地区的环境相对应。
 * toString(): 返回对象的字符串表示。
 * valueOf(): 返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。
 */

// 操作符
/**
 * 一元操作符：
 *  递增和递减操作符
 *  递增和递减操作符直接借鉴自c，而且有两个版本：前置型和后置型。顾名思义，前置型应该位于要操作的变量之前，而后置型应该位于要操作的变量之后。因此，在使用前置递增操作符给一个数值加1时，要把两个加号（++）放在这个数值变量前面。
 * 
 */
let age = 29;
++age;
// 在这个例子中，前置递增操作符把age的值变成了30，实际上执行这个前置递增操卆与执行以下操作的效果相同；

let age1 = 29;
age1 = age1 + 1;

let O = {
  valueOf: function() {
    return -1;
  }
}
console.log(O--);
O = +O;
console.log(O);

// 操作符
let result1 = 5 + '5';
console.log(result1);
console.log(typeof result1); // string

let num11 = 5;
let num22 = 10;
let message = `The sum of 5 and 10 is${num11 + num22}`
let message1 = 'this sum of 5 and 10 is' + num11 + num22;
let message2 = 'the sum of 5 and 10 is' + (num11 + num22);
console.log(message);
console.log(message1);
console.log(message2);

console.log(NaN - 1);

let numm = (5,1,2,4,5,0);
console.log(numm);
console.log(typeof numm);

// while
let i = 0;
do {
  i += 2;
} while (i < 10);
console.log(i);

let j = 0;
while (j < 10) {
j += 2;
}
console.log(j);

// for in 
let arr = [1,2,3,4]
for (let propertyName in arr) {
  console.log(propertyName);
}

// break
let breaknum = 0;
for (let i = 1;i< 10;i++) {
  if (i % 5 === 0) {
    break;
  }
  breaknum++;
}
console.log(breaknum);

let continuenum = 0;
for (let i = 1;i< 10;i++) {
  if (i % 5 === 0) {
    continue;
  }
  continuenum++;
}
console.log(continuenum);

let outernum = 0;
outermost: 
for (let i = 0;i < 10;i++) {
  for (let j = 0; j < 10;j++) {
    if (i === 5 && j === 5) {
      break outermost;
    }
    outernum++;
  }
}
console.log(outernum);

// with
/**
 * with 语句的作用是将代码的作用域设置到一个特定对象中。
 */

 let qs = location.search.substring(1);
 let hostName = location.hostname;
 let url = location.href;

 with(location) {
  let qs = search.substring(1);
  let hostName = hostname;
  let url = href;
 }
 /**
  * 在这个重写的例子中，使用with语句关联了location对象。这意味着
  每个变量首先被认为是一个局部变量，而如果在局部环境中找不到该变量的
  定义，就会查询location对象中是否有同名的属性。如果发现了同名属性，
  则以location对象属性值作为变量的值。
  严格模式下不允许使用with语句，否则视为语法错误。
  */


  // switch
  let switchnum = 0;
  switch(switchnum) {
    case 0: 
      console,log(13)
      break;
  }
  switch(true) {
    case switchnum < 0:
      console.log(`num ${swichnum}`);
      break;
  }

  // 函数

/**
 * 
 * 函数对任何语言来书都是一个核心的概念。通过函数可以封装
 * 任意多条语句，而且可以在任何地方、任何时候调用执行。ecmascript
 * 中的函数使用function关键字声明，后跟彝族参数以及函数整体。
 * 
 */
function sayHi(name, message) {
  console.log(name, message);
}

function doAdd(num1, num2) {
  if (arguments.length === 1) {
    console.log(num1 + 10);
  } else if(arguments,length === 2) {
    console.log(arguments[0] + num2);
  }
}
doAdd(10, 20);