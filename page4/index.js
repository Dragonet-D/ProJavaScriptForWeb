/**
 * 
 * 变量、作用域和内存问题
 * 
 */

 /**
  * 基本类型和引用类型；
  */
  let person = new Object();
  person.name = 'Neo';
  console.log(person.name);

  /**
   * 
   * 复制变量值
   * 
   */

// let result = variable instanceof constructor;
// console.log(result);

/**
 * 性能问题
 * 
 *  垃圾收集器是周期性运行的，而且如果为变量分配的内存量很可观，那么回收工作量也是相当大的。确定垃圾收集的时间间隔是一个非常重要的问题。说到垃圾收集器多长时间运行一次，不禁让人联想到IE因此声名狼藉的性能问题。ie的垃圾收集器是根据内存分配量运行的，具体一点说就是256个变量、4096个对象（或数组）字面量和数组元素（slot）或者64kb的字符串。达到上述任何一个临界值，垃圾收集器就会运行。这种实现方式的问题在于，如果一个脚本中包含那么多变量，那么该脚本很可能会在生命周期中一直保有那么逗的变量。而这样一来，垃圾收集器就不得不频繁的运行。结果，由此引发的严重性能问题触使IE7重写了其垃圾收集例程；
 */

 // 基本包装类型
 /**
  * 为了便于操作基本类型，ECMAScript还提供了3个特殊的饮用类型：Boolean Number和String 这些类型与本章介绍的其他饮用类型相似，但同时也具有与各自的基本类型相应的特殊行为。实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让哦们能够调用一些方法来操作这些数据。
  */

  let s1 = 'some text';
  let s2 = s1.substring(2);
  // 按理说基本类型不应该有方法
  // 后台做了处理
  /**
   * 创建String 类型的一个实例
   * 在实例上调用指定的方法
   * 销毁这个实例
   */

   // 引用类型与基本包装类型的主要区别就是对象的生存期。使用new操作符创建引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在与一行代码的执行瞬间，然后立即被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法。

// Boolean 类型
let booleanObj = new Boolean(true)
console.log(booleanObj);
console.log(typeof booleanObj);
console.log(booleanObj instanceof Boolean);
let bool = true;
console.log(bool);
console.log(typeof bool);
console.log(bool instanceof Boolean);

// Number 类型
let numberObj = new Number(10);
console.log(numberObj.toString());
// 二进制
console.log(numberObj.toString(2));
console.log(numberObj.toString(8));

console.log(numberObj.toFixed(2));

console.log(numberObj.toExponential(1));

// String
let stringObj = new String('hello world');
console.log(stringObj.length);

stringObj.charAt(1); // 'e'
stringObj.charCodeAt(1); // '101
stringObj.concat('nihao');

stringObj.slice(3);
stringObj.substring(3);
stringObj.substr(3);

stringObj.slice(3, 7);
stringObj.substring(3,7);
stringObj.substr(3,7);

stringObj.indexOf('o');
stringObj.lastIndexOf('o');

stringObj.indexOf('o', 1);
stringObj.lastIndexOf('o', 2);

let positions = [];
let pos = stringObj.indexOf('o');
while(pos > -1) {
  positions.push(pos);
  pos = stringObj.indexOf('o', pos+1);
}
console.log(positions);

// trim()
let stringTrim = '  hello world  ';
stringTrim.trim();
stringTrim.toLowerCase();
stringTrim.toLocaleLowerCase();

// 字符串的模式匹配方法

let text = 'cat, bat, sat, fat';
let pattern = /.at/g;
let matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

/**
 * match() 方法返回了一个数组；如果是调用RegExp对象的exec()方法并传递本例中的字符串作为参数，那么也会得到与此相同的数组：数组的第一项是与整个模式匹配的字符串，之后的每一项（如果有）保存着与正则表达式中的捕获组匹配的字符串。
 */

let regText = 'cat, bat, sat, fat';
let regResult = regText.replace('at', 'ond');

regResult = regText.replace(/at/g, 'ond');
console.log(regResult);

result = regText.replace(/(.at)/g, "word($1)");
console.log(result);

// replace 
/**
 * replace第二个参数可以是一个函数。在只有一个匹配项（即与模式匹配的字符串）的情况下，会向这个函数传递三个参数：模式的匹配项、模式匹配项在字符串中的位置和原始字符串。在正则表达式中定义了多个捕获组的匹配项，但最后两个参数仍然分别是模式的匹配项在字符串中的位置和原始字符串。这个函数应该返回一个字符串，表示应该被替换的匹配项使用函数作为replace()方法的第二个参数可以实现更加精细的替换操作；
 */
function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function(match, pos, originalText) {
    switch(match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "\"":
        return "&quot;";
    }
  });
}
console.log(htmlEscape('<p class=\'greeting\'>hello world</p>'));
let date = new Date();
date.toDateString();// 以特定实现的格式显示星期几,月,日和年;
date.toTimeString();// 以特定实现的格式显示时,分,秒和时区;
date.toLocaleDateString(); 
date.toLocaleTimeString();
date.toUTCString();
