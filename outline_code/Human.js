class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    speak(message) {
      console.log(`${this.name} says: "${message}"`);
    }
  }
  class Dad extends Human {
    constructor(name, age, hobby) {
      super(name, age);
      this.hobby = hobby;
    }
    showHobby() {
      console.log(`${this.name}'s hobby is ${this.hobby}.`);
    }
  }
  class Mom extends Human {
    constructor(name, age, profession) {
      super(name, age);
      this.profession = profession;
    }
  
    showProfession() {
      console.log(`${this.name} works as a ${this.profession}.`);
    }
  }
  class Son extends Human {
    constructor(name, age, schoolGrade) {
      super(name, age);
      this.schoolGrade = schoolGrade;
    }
  
    goToSchool() {
      console.log(`${this.name} goes to ${this.schoolGrade} grade.`);
    }
  }
  let father = new Dad("John", 40, "playing guitar");
  let mother = new Mom("Emily", 35, "teacher");
  let son = new Son("Sam", 10, "5th");
  
  father.introduce();        // Output: Hello, my name is John and I am 40 years old.
  father.showHobby();        // Output: John's hobby is playing guitar.
  
  mother.introduce();        // Output: Hello, my name is Emily and I am 35 years old.
  mother.showProfession();   // Output: Emily works as a teacher.
  
  son.introduce();           // Output: Hello, my name is Sam and I am 10 years old.
  son.goToSchool();          // Output: Sam goes to 5th grade.
  