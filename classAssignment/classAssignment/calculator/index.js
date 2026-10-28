const {
    add,
    subtract,
    multiplication,
    division,
} = require("../calculator/calculatorOperations");


const operations = process.argv[2];
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


switch(operations){
    case "add":
        console.log(add(num1,num2))
        break
    case "subtract":
        console.log(subtract(num1,num2))
        break
    case "multiplication":
        console.log(multiplication(num1,num2))
        break
    case "division":
        console.log(division(num1, num2))
        break
    default:
        console.log("Error!")

}

