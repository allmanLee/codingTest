function solution(size, arr) {
  const _arr = [...arr];
  let answer = Array.from({ length: size }, () => 0);

  _arr.forEach((el) => {
    let KEY = el;
    let isIt = answer.indexOf(KEY);
    if (isIt === -1) {
      cashMiss(KEY, answer);
    } else {
      cashHit(KEY, answer, isIt);
    }
  });

  return answer;
}
function cashMiss(KEY, answer) {
  const arr = answer;
  let tmp = KEY;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
    if (i === 0) {
      arr[i] = tmp;
    }
  }
}
function cashHit(KEY, answer, isIt) {
  const arr = answer;
  let tmp = KEY;
  for (let i = isIt; i >= 0; i--) {
    arr[i] = arr[i - 1];
    if (i === 0) {
      arr[i] = tmp;
    }
  }
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
