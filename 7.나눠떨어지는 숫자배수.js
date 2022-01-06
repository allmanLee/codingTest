function solution(arr, divisor) {
  const _arr = [...arr].filter((el) => el % divisor === 0);
  let answer = _arr;
  _arr.sort((a, b) => a - b);
  if (answer.length == 0) {
    answer.push(-1);
  }
  return answer;
}
let arr = [3, 2, 6];
let divisor = 10;
console.log(solution(arr, divisor));
