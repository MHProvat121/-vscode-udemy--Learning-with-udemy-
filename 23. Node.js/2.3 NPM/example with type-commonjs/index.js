/*
Silly name
A random name generator.

1)download sillyname from npmjs.com
2)do the terminal instructions 
    a)npm init                       [if it is not initialized]
    b)npm i sillyname                [install sillyname as dependency]
    c)add codes of the dependency in your index.js
*/

//for type commonjs
var generateName = require('sillyname');
var sillyName = generateName();

//b')console log it
console.log(`my name is ${sillyName}.`)

//c')open from terminal "node ./index.js"