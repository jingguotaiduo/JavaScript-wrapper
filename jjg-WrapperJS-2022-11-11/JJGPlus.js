import { default as jjgFunction } from './Function.js';
import {Add} from './SingleFunction.js';
import { Add as Jia } from './SingleFunction.js';
import * as MF from './MultipleFunctions.js';
import { Person, Teacher } from './Class.js';
import { Person as P1, Teacher as T1 } from './Class.js';
import { children, Parent } from './Function1.js'
import { Student as Stud} from './Function2.js';
import { Person3 as p3} from './Function3.js';

let JJGPlus = {
};
JJGPlus.jjgFunction = jjgFunction;
JJGPlus.Add = Add;
JJGPlus.Jia = Jia;
JJGPlus.MF= MF;
JJGPlus.Person = Person;
JJGPlus.Teacher = Teacher;
JJGPlus.P1 = P1;
JJGPlus.T1 = T1;
JJGPlus.children = children;
JJGPlus.Parent = Parent;
JJGPlus.Stud = Stud;
JJGPlus.p3 = p3;

export default JJGPlus;



