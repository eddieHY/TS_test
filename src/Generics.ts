// 使用范型来创建可重用的组件
// function identity(arg: number): number {
//   return arg;
// }

// 类型变量
function identity<T>(arg: T): T { // 范型
  return arg;
}
let output = identity<string>("myString");

interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identityInter<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identityInter;