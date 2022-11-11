// Student class!
import { children as Person } from './Function1.js';

function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {

  console.log('Yo! I\'m ' + this.name.first + '.');
};

export { Student };

// let student1 = new Student('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets']);
// student1.greeting();