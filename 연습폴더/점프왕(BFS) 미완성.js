let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

let count = input[0]; // 3
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}
// numbers = numbers.flat();
console.log(solution(numbers));

function solution(numbers) {
  let length = numbers.length;
  let queue = Array.from({ length: length * length }, () => 0); //원형큐 사용한다.
  let first = 0;
  let rear = 0;
  let now = numbers[0][0];
  queue[++rear % (length * length)] = now;
  console.log(queue);
  while (rear - first !== 0) {
    queue[rear];
    queue[first++] = 0;

    for (dir of [
      [x + 1, y],
      [x, y + 1],
    ]) {
      queue[++rear % (length * length)] = numbers[dir[0]][dir[1]]; //큐에 넣는다 해당 값을
    }
  }

  // while(L=length) {

  // }
}
