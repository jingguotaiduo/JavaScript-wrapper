//import * as JJGPlus from './JJGPlus.js';
import JJGPlus from './JJGPlus.js';

let a = new JJGPlus.jjgFunction(5);
a.log();
a.setValue(2);
console.log(a.getValue());

console.log(JJGPlus.Add(20,30));
console.log(JJGPlus.Jia(2,3));

console.log(JJGPlus.MF.divide(2, 3));
console.log(JJGPlus.MF.multiply(2, 3));
console.log(JJGPlus.MF.jc(5));

let snape = new JJGPlus.Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
console.log(snape.age);
console.log(snape.subject);
snape.subject = "Balloon animals";
console.log(snape.subject);

let t = new JJGPlus.T1('Severus-T', 'Snape-T', 48, 'female', ['Potions-T'], 'Dark arts-T', 3);
t.greeting();
t.farewell();
console.log(t.age);
console.log(t.subject);

let leia = new JJGPlus.Person('Leia', 'Organa', 19, 'female' ['Government']);
leia.farewell();
console.log(leia.getName);

let p = new JJGPlus.P1('Leia-p', 'Organa-p', 29, 'male' ['Government-p']);
p.farewell();
console.log(p.getName);

let person1 = new JJGPlus.children('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
person1.bio();
person1.greeting();
person1.farewell();