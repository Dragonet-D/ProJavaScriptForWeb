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
  o.name
}