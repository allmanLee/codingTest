const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

function solution(input) {
  const nLength = input.shift();
  const number = input
    .shift()
    .split(" ")
    .map((el) => parseInt(el));
  const oper = [p];
  console.log(nLength);
}

solution(input);
