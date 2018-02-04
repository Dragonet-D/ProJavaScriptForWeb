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
