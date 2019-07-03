// 存取器
// class Employee {
//   fullName: string;
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   console.log(employee.fullName);
// }

let passcode = "secret passcode";
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if(passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName)
}

// 静态属性：这些属性存在于类本身上面而不是类的实例上
// 每个实例想要访问这个属性的时候，都要在origin前面加上类名。 如同在实例属性上使用this.前缀来访问属性一样，这里我们使用Grid.来访问静态属性。
class Grid {
  static origin = {x: 0, y: 0};
  calculateDistanceFromOrigin(point: {x: number; y: number;}) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// 抽象类 ：抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含abstract关键字并且可以包含访问修饰符。

abstract class Department {

 constructor(public name: string) {
 }

 printName(): void {
     console.log('Department name: ' + this.name);
 }

 abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

 constructor() {
     super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
 }

 printMeeting(): void {
     console.log('The Accounting Department meets each Monday at 10am.');
 }

 generateReports(): void {
     console.log('Generating accounting reports...');
 }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 构造函数 。。。（参考中文文档）