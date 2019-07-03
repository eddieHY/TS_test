  // 类
  class Greeter {
   greeting: string;
   constructor(message: string) {
       this.greeting = message;
   }
   greet() {
       return "Hello, " + this.greeting;
   }
 }

 let greeters = new Greeter("world");
 console.log('greeters ', greeters.greet())
 // 继承
 // class Animal {
 //   move(distanceInMeters: number = 0) {
 //     console.log(`Animal moved ${distanceInMeters}m.`);
 //   }
 // }

 // class Dog extends Animal {
 //   bark() {
 //     console.log('Woof! Woof!');
 //   }
 // }

 // const dog = new Dog();
 // dog.bark();
 // dog.move(10); // 类从基类中继承了属性和方法
 // dog.bark();

 class Animal {
   name: string;
   constructor(theName: string) {
     this.name = theName;
   }
   move(distanceInMeters: number = 0) {
     console.log(`${this.name} moved ${distanceInMeters}m`)
   }
 }

 class Snake extends Animal {
   constructor (name: string) {
     super(name); // super(class Animal)
   }
   move(distanceInMeters = 5) {
     console.log("Slithering...")
     super.move(distanceInMeters)
   }
 }
 
 class Horse extends Animal {
   constructor(name: string) { super(name); }
   move(distanceInMeters = 45) {
     console.log("Galloping...");
     super.move(distanceInMeters);
   }
 }

 let sam = new Snake("Sammy the Python");
 let tom: Animal = new Horse("Tommy the Palomino");
 
 // sam.move();
 // tom.move(34);

 