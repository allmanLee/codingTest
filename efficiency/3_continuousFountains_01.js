function solution(m, arr) {
  const _arr = [...arr];
  let answer = 0;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  let count = 0;
  while (p1 < _arr.length && p2 < _arr.length) {
    console.log(`돌아가는 중 ${p1}`);
    sum += _arr[p2++];
    if (sum >= 6) {
      console.log(`${sum}`);
      if (sum === 6) {
        count++;
      }
      sum = 0;
      p1++;
      p2 = p1;
    }
  }
  answer = count;
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
