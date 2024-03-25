#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 7) + 1;
const answers = await inquirer.prompt([
    {
        name: "Number",
        type: "number",
        message: "Guess the number"
    }
]);
if (answers.Number === randomNumber) {
    console.log('congratulations you have won the game');
}
else {
    console.log('your guessing number is wrong');
}
