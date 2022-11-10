   import {default as jjgFunction} from './Function.js';
   let a = new jjgFunction(5);
   a.log();
   a.setValue(2);
   console.log(a.getValue());

   import Add from './SingleFunction.js';
   import {default as Jia } from './SingleFunction.js';
   console.log(Add(20,30));
   console.log(Jia(2,3));

   import * as MF from './MultipleFunctions.js';
   console.log(MF.divide(2, 3));
   console.log(MF.multiply(2, 3));
   console.log(MF.jc(5));

   import { Person, Teacher } from './Class.js';
   import { Person as P1, Teacher as T1 } from './Class.js';

    let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
    snape.greeting(); // Hi! I'm Severus.
    snape.farewell(); // Severus has left the building. Bye for now.
    console.log(snape.age) // 58
    console.log(snape.subject) // Dark arts
    snape.subject = "Balloon animals" // Sets subject to "Balloon animals"
    console.log(snape.subject) // Returns "Balloon animals"

    let t = new T1('Severus-T', 'Snape-T', 48, 'female', ['Potions-T'], 'Dark arts-T', 3);
    t.greeting(); // Hi! I'm Severus.
    t.farewell(); // Severus has left the building. Bye for now.
    console.log(t.age) // 58
    console.log(t.subject) // Dark arts



    let leia = new Person('Leia', 'Organa', 19, 'female' ['Government']);
    leia.farewell();
    console.log(leia.getName);

   let p = new P1('Leia-p', 'Organa-p', 29, 'male' ['Government-p']);
   p.farewell();
   console.log(p.getName);



import { children, Parent } from './Function1.js'
let person1 = new children('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
person1.bio();
person1.greeting();
person1.farewell();

let teacher1 = new Parent('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
teacher1.greeting();

import { Student as Stud} from './Function2.js';

let student1 = new Stud('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets']);
student1.greeting();


import { Person3 as p3} from './Function3.js';

p3.prototype.farewell = function() {
  console.log(this.name.first + ' has left the building. Bye for now!');
}

let person3 = new p3('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
person3.bio();
person3.greeting();
person3.farewell();


