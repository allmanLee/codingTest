function solution(arr) {
  let answer = 0;
  let count = 0;
  const _arr = [...arr];

  _arr.reduce((acc, now) => {
    if (acc === 0) {
      count = 0;
    } else count++;

    answer += count;
    return now;
  });
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
