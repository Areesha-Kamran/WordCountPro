#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
async function welcome() {
    let title = chalkAnimation.rainbow("\t\t\t\tWelcome to WordCountPro!");
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
}
await welcome();
let usr_ans = await inquirer.prompt([
    {
        name: "words",
        type: "input",
        message: console.log(chalk.magenta("Please Enter Your Sentence"))
    }
]);
let word_count = usr_ans.words.trim().split(" ").length;
console.log(chalk.green.bold.italic(`Your Sentence has ${word_count} Words.`));
