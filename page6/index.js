class Animal {
  constructor(props) {
    this.props = props;
  }
  init() {
    console.log(this.props);
  }
}
let animal = new Animal('nihao');
animal.init();

function Rabit(name) {
  this.name = name;
}
Rabit.prototype = {
  constructor: Rabit,
  init() {
    console.log(this.name);
  }
}
let rabit = new Rabit('monster');
rabit.init();

let book = {
  _year: 2004,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get: function() {
    return this._year;
  },
  set: function(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
});
book.year = 2005;
console.log(book.edition); // 2

// 定义多个属性
let books = {};
Object.defineProperties(books, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function() {
      return this._year;
    },
    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});

// 读取属性的特性

let descriptor = Object.getOwnPropertyDescriptor(books, '_year');
console.log(descriptor.value); // 2004
console.log(descriptor.configurable); // false
console.log(typeof descriptor.get); // undefined

// 工厂模式

function createPerson (name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  }
  return o;
}
let person1 = createPerson('leo', 29, 'Software Engineer');
let person2 = createPerson('neo', 27, 'Doctor');
person2.sayName()
/**
 * 函数createPerson() 能够根据接受的参数来构建一个包含所有必要信息的Person对象.可以无数次地调用这个函数,而每次他会返回一个包含三个属性一个方法的对象.工厂模式虽然解决了创建多个相似对象的问题,但却没有解决对象识别的问题(即怎样知道一个对象的类型).随着JavaScript的发展,又一个新模式出现;
 */

// 构造函数模式
function GPerson(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  }
}
let gperson1 = new GPerson('LEO', 29, 'soft');
let gperson2 = new GPerson('Nao', 28, 'haha');
gperson2.sayName()
console.log(gperson1 instanceof GPerson);
/**
 * 构造函数的缺点就是每次创建都要重新new一下; 
 */

 // 原型模式

 function YPerson() {
 }
 YPerson.prototype.name = 'Ni'
 YPerson.prototype.age = 29;
 YPerson.prototype.sayName = function() {
   console.log(this.name);
 }
 let yperson1 = new YPerson();
 yperson1.sayName();
 