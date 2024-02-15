// const chalk=require('chalk');

const validator=require("validator");
// console.log(chalk.backgroundColorNames.underline('Hello world!'));

const data=validator.isEmail("hello@gmail.com");
console.log(data)