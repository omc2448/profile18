const crypto = require("crypto");

const rolls = 10;
for (let i = 1; i <= rolls; i++) {
  const randomDice = crypto.randomInt(1, 7);
  console.log(`Dice Rolled Valued is ${randomDice}`);
}
