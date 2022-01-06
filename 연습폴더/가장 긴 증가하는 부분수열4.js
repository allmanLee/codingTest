let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let count = input[0]; // 2
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

numbers = numbers.flat();
console.log(solution(numbers));
