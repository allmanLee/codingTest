// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");

// let count = input[0];
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== "") {
//     numbers.push(input[i].split(" "));
//   }
// }

// solution(numbers).forEach((el) => console.log(el));

function solution(arr) {
  let _arr = [...arr];
  let stack = [];
  let stackAdd = (array, el) => array.push(el);
  let stackDelete = (array) => array.pop();

  let answer = _arr.map((el) => {
    let element = el.join("").split("");
    stack = [];

    for (let i = 0; i < element.length; i++) {
      if (element[i] === ")" && stack.length == 0) {
        stackAdd(stack, ")");
        break;
      }
      element[i] === "(" ? stackAdd(stack, element[i]) : stackDelete(stack);
    }
    return stack.length > 0 ? "NO" : "YES";
  });

  return answer;
}

//     (
