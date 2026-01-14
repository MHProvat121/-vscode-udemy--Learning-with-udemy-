/*
Silly name
A random name generator.

1)download sillyname from npmjs.com
2)do the terminal instructions 
    a)npm init                       [if it is not initialized]
    b)npm i sillyname                [install sillyname as dependency]
    c)add codes of the dependency in your index.js
*/

//-----section:silly name generator------------------------------------
//for type module [ES]
import generateName from "sillyName"
var sillyName = generateName();

//b')console log it
console.log(`my name is ${sillyName}.`)


//----------section:superhero names generator--------------------------------

import { randomSuperhero } from 'superheroes';

const name = randomSuperhero();

console.log(`I am ${name}!`);


//c')open from terminal "node ./index.js"