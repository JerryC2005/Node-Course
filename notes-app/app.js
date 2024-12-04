// const fs = require('fs');// callinbg req to load fs module 

// //fs.writeFileSync('notes.txt', 'My name is jerry.');

// fs.appendFileSync('notes.txt', ' I am 19 years old.');
// const add = require('./utils.js') //gets file and runs what is inside

// let sum = add(4, -2) 

// console.log(sum);

// const validator = require('validator')
const getNotes = require('./notes.js');

const chalk = require('chalk')

let msg = getNotes();

console.log(msg);
// console.log(validator.isEmail('gmail.com'));
// console.log(validato(r.isURL('https://bruh.com'));
console.log(chalk.blue.inverse('bruh!'));
