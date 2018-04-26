// Classes

class Dog {
  constructor(name) {
    this.name = name;
    this.legs = 4;
  }
  saySomething() {
    return "I'm " + this.name;
  }

  doSomething() {
    console.log("woof!");
  }

  greet(stranger) {
    return "Hello " + stranger;
  }
}

var dog = new Dog("Millie");
console.log(dog.saySomething());
dog.doSomething();
console.log(dog.greet("Susie"));
console.log(dog.legs);
