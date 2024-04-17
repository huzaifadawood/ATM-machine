#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
console.log("Your balance is:" + myBalance);
let myPin = 7788;
console.log("pin is 7788");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        },
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaning balance is :" + myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your Balance is :" + myBalance);
    }
}
else {
    console.log("your pin code is incorrect !!!");
}
