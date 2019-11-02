// --- Directions
// Make a simple person class

class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `Hey ${this.name}`;
  }
}

randy = new Person("Randy");

randy.greeting();
