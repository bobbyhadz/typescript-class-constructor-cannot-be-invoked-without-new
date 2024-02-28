export {};

// Class constructor cannot be invoked without 'new' in JavaScript

// EXAMPLE 1 - Use the new operator

class Person {
  constructor(
    public first: string,
    public last: string,
  ) {
    this.first = first;
    this.last = last;
  }

  getName() {
    return `${this.first} ${this.last}`;
  }
}

// 👇️ use `new` operator
const p1 = new Person('James', 'Doe');
console.log(p1); // 👉️ {first: 'James', last: 'Doe'}

console.log(p1.getName()); // 👉️ "James Doe"

// ---------------------------------------------------

// // EXAMPLE 2 - Correctly creating instances

// class Employee {
//   constructor(
//     public name: string,
//     public salary: number,
//   ) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// // ✅ Works
// const employee = new Employee('James', 100);

// console.log(employee.name); // 👉️ "James"
// console.log(employee.salary); // 👉️ 100
