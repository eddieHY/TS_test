class HelloTypeScript {
  helloString: string;
  constructor(message: string) {
   this.helloString = message;
  }
  hello() {
   return this.helloString;
  }
}
let myName: string = 'SsanShui'
let myAge: number = 23
let sentence : string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month`
let helloTypeScript = new HelloTypeScript(sentence);
document.body.innerHTML = helloTypeScript.hello();

// 接口
interface Person2 {
  firstName: string;
  lastName: string;
}

function greeter(person: Person2) {
  return "Hello, " + person.firstName + " " +person.lastName;
}

let user = { firstName: "Jane", lastName: "dany"};

console.log(greeter(user))

// 接口
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: 'black'});
console.log('mySquare', mySquare)

// 只读属性，readonly

// （接口）函数类型 ：参数类型和返回值类型
  interface SearchFunc {
    (source: string, sunString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  }

  // 可索引类型：可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。
  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray  = ['Bob', 'Fred'];

  let myStr: string = myArray[0];

  // 类类型
  // 1实现接口
  interface ClockInterface {
    currentTime: Date;
    // setTime(d: Date);
    setTime(d: Date): any;
  }

  class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h:number, m: number) { }
  }

