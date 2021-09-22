function solution(k, arr) {
  let _arr = [...arr];
  let answer;
  let rp = 2;
  let lp = 0;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = lp; i < rp + 1; i++) {
    sum += _arr[i];
    console.log(sum);
    max = sum;
  }
  while (rp < _arr.length) {
    sum -= _arr[lp++];
    sum += _arr[rp++];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
