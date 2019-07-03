let sym1 = Symbol();
let sym2 = Symbol("key");

let sym3 = Symbol("key")
// sym2 === sym3; // false, symbols是唯一的

// 像字符串一样，symbols也可以被用做对象属性的键。
let sym = Symbol();
let obj = {
    [sym]: "value"
};
// console.log(obj[sym]); // erro

const getClassNameSymbol = Symbol();
class C {
  [getClassNameSymbol]() {
    return "C"
  }
}
let c = new C();
let className = c[getClassNameSymbol]();