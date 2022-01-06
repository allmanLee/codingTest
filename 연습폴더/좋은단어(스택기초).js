// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");

// let count = input[0]; // 2
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== "") {
//     numbers.push(input[i].split(" "));
//   }
// }

// numbers = numbers.flat();
// console.log(solution(numbers));

function solution(numbers) {
  let answer = numbers.map((el) => {
    let word = el.split("");
    let stack = []; //스택초기화
    word.forEach((s) => {
      if (stack[stack.length - 1] == s) {
        stack.pop();
      } else stack.push(s);
    });

    if (stack.length === 0) {
      return true;
    } else return false;
  });
  return answer.filter((el) => el).length;
}
