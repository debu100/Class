///???? Super/Base/Parent Class  ???///

class Emp {
  //?  constructor gets automatically called when an object is created from the class
  constructor(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    //! The method is repeating in both objects--- violating dry rule
    // this.sayHi = function () {
    //   console.log(`Hi ${this.firstName}`);
    // };
  }
  //? Prototype method -->this method gets attached to the calss prototype automatically
  sayHi() {
    console.log(`Hello ${this.firstName}`);
  }
  //? Static Method --> doesn't get copied to the object, so can't call it with the object , rather we have to call it with the class itslef

  static looks() {
    console.log(`Both are beautiful`);
  }

  //? Static Property

  static inc = 1000;
}

const emp1 = new Emp("Sujata", "Adhikary", 26, "Mumbai");

const emp2 = new Emp("Supriya", "Maity", 23, "Chennai");

console.log(emp1);

console.log(emp2);

emp1.sayHi();

emp2.sayHi();

// emp1.looks(); //*emp1.looks is not a function --> no coonetion with object

// emp2.looks(); //*emp2.looks is not a function --> no coonetion with object

Emp.looks(); //* directly accessible with class

console.log(emp1.inc); //* undefined --> can't access static properties through the object

console.log(emp2.inc); //* undefined --> can't access static properties through the object

console.log(Emp.inc); //*1000

////?????  Inheritance  ?????////

//? Derived/Child Class

class Mng extends Emp {
  constructor(dpt, firstName, lastName, age, city) {
    super(firstName, lastName, age, city);
    this.department = dpt;
  }

  sayBye() {
    this.sayHi(); //* Hello Moumita
    console.log(`Bye ${this.firstName}`); //* Bye Moumita
  }
}

const mng1 = new Mng("Web Dev", "Moumita", "Kar", 32, "Dubai");

console.log(mng1);

console.log(mng1.department);

console.log(mng1.firstName);

console.log(mng1.lastName);

console.log(mng1.age);

console.log(mng1.city);

mng1.sayHi();

console.log(Mng.inc); //*1000

console.log(mng1.inc); //*undefined

mng1.sayBye();
mng1.sayHi(); //* Hello Moumita

//! mng1.looks(); --> mng1.looks is not a functions

//??? Two Classes With Same prototype methods  ???//

class Husband {
  gym() {
    console.log(`Very Strong`);
  }
}

class Wife extends Husband {
  gym() {
    //! this.gym(); --> Maximum call stack size exceeded
    super.gym();
    console.log(`Medium Strong`);
  }

  gym2() {
    super.gym(); //*Very Strong
  }
}

const w1 = new Wife();

console.log(w1);

w1.gym();
w1.gym2();

//??? Private and Public Values and Methods ???//

//* public values are those which are accessible outside of the class

//*  private values are those which are not accessible outside of the class and muist have # before their name and must be defined outside of the constructor

class Dreamjob {
  //   #company;--- can do like this as well
  #company = "";
  constructor(com) {
    this.#company = com;
  }
  #getCompanyName() {
    console.log(this.#company);
  }

  getPrivateMethod() {
    //!  #getCompanyName(); Unexpected identifier '#getCompanyName'
    this.#getCompanyName();
  }
}

const com1 = new Dreamjob("Microsoft");

console.log(com1);

console.log(com1.company); //* can't access directly on the object - undefined

com1.getPrivateMethod(); //*Microsoft--- we must access private properties with a method in side the class

//????  Mixin  ????////

const obj = {
  hasCar: function () {
    console.log(`Yes`);
  },
  hasBike: function () {
    console.log(`No`);
  },
  isMarried: true,
};

const obj1 = {
  hasHouse: function () {
    console.log(`Yesssssssssssssss`);
  },
};

class Guy {
  constructor(sal) {
    this.salary = sal;
  }
  hasPlane() {
    console.log(`Noooooooooooo`);
  }
}

class Lady extends Guy {}

const lady1 = new Lady(35000);

console.log(lady1);

lady1.hasPlane();

//??? Mixin --> Adding methods in an object to the class prototype  ???///

Object.assign(Lady.prototype, obj);

//? Multi Level Mixin

Object.assign(Lady.prototype, obj1);

//* Mixin is done by the above way

console.log(lady1);

lady1.hasCar();

lady1.hasBike();

lady1.hasHouse();

//??? Multi Level Inheritance  ???////

//* This is a combination of Mixin and Multi Level Inheritance

//* Girl has everything of obj as well as Guy and Lady

class Girl extends Lady {}

const g1 = new Girl(14000);

console.log(g1);

console.log(g1.salary);

g1.hasPlane();

g1.hasCar();

g1.hasHouse();

g1.hasBike();
