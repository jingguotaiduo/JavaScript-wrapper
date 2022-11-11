import JJGPlus1 from './JJGPlus1.js';

let a = new JJGPlus1.jjgFunction(5);
a.log();
a.setValue(2);
console.log(a.getValue());

console.log(JJGPlus1.Add(20,30));
console.log(JJGPlus1.Jia(2,3));

console.log(JJGPlus1.MF.divide(2, 3));
console.log(JJGPlus1.MF.multiply(2, 3));
console.log(JJGPlus1.MF.jc(5));

let snape = new JJGPlus1.Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
console.log(snape.age);
console.log(snape.subject);
snape.subject = "Balloon animals";
console.log(snape.subject);

let t = new JJGPlus1.T1('Severus-T', 'Snape-T', 48, 'female', ['Potions-T'], 'Dark arts-T', 3);
t.greeting();
t.farewell();
console.log(t.age);
console.log(t.subject);

let leia = new JJGPlus1.Person('Leia', 'Organa', 19, 'female' ['Government']);
leia.farewell();
console.log(leia.getName);

let p = new JJGPlus1.P1('Leia-p', 'Organa-p', 29, 'male' ['Government-p']);
p.farewell();
console.log(p.getName);

let person1 = new JJGPlus1.children('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
person1.bio();
person1.greeting();
person1.farewell();