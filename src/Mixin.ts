// 首先创建两个Mixins
class Disposable {
  isDisposed: boolean;
  dispose() {
   this.isDisposed = true;
  }
}

class Activatable {
  isActive:boolean;
  activate() {
    this.isActive = false;
  }
  deactivate() {
    this.isActive = false;
  }
}
class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
  }
    interact() {
      this.activate();
    }
    isDisposed: boolean = false;
    dispose: () => void;
    isActive: boolean = false;
    activate: () => void;
    deactivate: ()=> void;
}
applyMixins(SmartObject, [Disposable, Activatable]);

let SmartObj = new SmartObject();
setTimeout(() => SmartObj.interact(), 1000)
// 创建帮助函数，遍历mixins上的所有属性，并复制到目标上，把之前的占位属性替换成真正的实现代码
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtors => {
    Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtors.prototype[name];
    });
  });
}
