const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            if (num2 === 0) {
                return "Error! Division by zero";
            }
            return num1 / num2;

        default:
            return "Invalid operator";
    }
}

function startCalculator() {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter operator (+, -, *, /): ', (operator) => {
            rl.question('Enter second number: ', (num2) => {
                const result = calculate(num1, num2, operator);
                console.log("Result: " + result);
                rl.close();
            });
        });
    });
}

startCalculator();