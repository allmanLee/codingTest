const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

const array = input.map((v) => v.split(" ")).flat();
// const result = B.map((v) => (array.has(v) ? 1 : 0));
array.shift();

solution(array);
function solution(array) {
  const answer = [];
  const A = [...array];
  const arrayLength = A.length;
  const memory = Array.from({ length: arrayLength }, () => 0);
  memory[0] = 1;
  for (let i = 0; i < arrayLength; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (A[j] < A[i] && dy[j] > memory) {
        max = memory[j];
      }
    }
  }
  memory[i] = max + 1;
  answer = Math.max(anwer, dy[i]);
}
