#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
//Class Player & Opponent
class player {
    name;
    fuel = 100;
    constructor(name) {
        (this.name = name), this.fuel;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        (this.name = name), this.fuel;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
console.log(chalk.bold.cyan.italic("<<<--------------------------------------->>>"));
console.log(chalk.bold.cyan.italic("<<<---------Welocome To Moiz Ahmed GAme--------->>>"));
console.log(chalk.bold.cyan.italic("<<<--------------------------------------->>>"));
//Player Name & Opponent Select
let player1 = await inquirer.prompt({
    name: "input",
    type: "input",
    message: "Enter your name",
});
console.log(chalk.cyan("----------------------------------------------------------------"));
let opponent1 = await inquirer.prompt({
    name: "list",
    message: "Select the opponent",
    type: "list",
    choices: ["Zombie", "Dragon", "KingKong"],
});
console.log(chalk.cyan("----------------------------------------------------------------"));
//Gather Data
let p1 = new player(player1.input);
let o1 = new opponent(opponent1.list);
//Conditions Apply
do {
    //Zombie
    if (opponent1.list === "Zombie") {
        // console.log(`${chalk.bold.green(player1.input)} VS ${chalk.bold.red(opponent1.list)}`);
        let opponent2 = await inquirer.prompt({
            name: "fight",
            message: "Select the operation",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run of the alive"],
        });
        if (opponent2.fight === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("Congratulatios! You Win the Game"));
                    process.exit();
                }
            }
        }
        if (opponent2.fight === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`your fuel portion is ${p1.fuel}`));
        }
        if (opponent2.fight === "Run of the alive") {
            console.log(chalk.bold.red.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    //Dragon
    if (opponent1.list === "Dragon") {
        // console.log(`${chalk.bold.green(player1.input)} VS ${chalk.bold.red(opponent1.list)}`);
        let opponent2 = await inquirer.prompt({
            name: "fight",
            message: "Select the operation",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run of the alive"],
        });
        if (opponent2.fight === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("Congratulatios! You Win the Game"));
                    process.exit();
                }
            }
        }
        if (opponent2.fight === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`your fuel portion is ${p1.fuel}`));
        }
        if (opponent2.fight === "Run of the alive") {
            console.log(chalk.bold.red.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    //KingKong
    if (opponent1.list === "KingKong") {
        // console.log(`${chalk.bold.green(player1.input)} VS ${chalk.bold.red(opponent1.list)}`);
        let opponent2 = await inquirer.prompt({
            name: "fight",
            message: "Select the operation",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run of the alive"],
        });
        if (opponent2.fight === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("Congratulatios! You Win the Game"));
                    process.exit();
                }
            }
        }
        if (opponent2.fight === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`your fuel portion is ${p1.fuel}`));
        }
        if (opponent2.fight === "Run of the alive") {
            console.log(chalk.bold.red.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
} while (true);
