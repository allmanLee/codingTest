let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

let numbers = [];
let count = input[0].split(" ")[1]; // 2
for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}
numbers = numbers.flat();
numbers = numbers.map((el) => Number(el));
console.log(numbers);

solution(count, numbers);

function solution(count, arr) {
  //배열뒤에서부터 탐색
  let a = count; //4790
  let answer = 0;
  reverArr = arr.reverse();
  for (let i = 0; i < reverArr.length; i++) {
    if (a !== 0) {
      if (reverArr[i] <= a) {
        a -= reverArr[i];
        i--;
        answer++;
      }
    } else break;
  }
  console.log(answer);
}
