#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "input",
        message: "Please guess a number between 1-6:",
    },
]);
if (parseInt(answers.userguessedNumber) === randomNum) {
    console.log("Congratulations! You guessed the right number!");
}
else {
    console.log("Oops! You guessed wrong.");
}
