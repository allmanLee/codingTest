function solution(s, t) {
  let answer = [];
  const _arr = [...s];
  let min = Number.MAX_SAFE_INTEGER;
  let count = 0;
  let a, b;
  console.log(_arr);

  for (let x = 0; x < _arr.length; x++) {
    for (let y = 0; y < _arr.length; y++) {
      a = x;
      b = y;

      if (_arr[y] === t) {
        count = Math.abs(x - y);
        if (count <= min) {
          min = count;
        }
      }
    }
    answer.push(min);
    min = Number.MAX_SAFE_INTEGER;
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
