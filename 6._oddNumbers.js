function solution(arr) {
  let answer;
  let oddSum = 0;
  let oddMin = Number.MAX_SAFE_INTEGER;
  let _arr = [...arr];
  let oddArr = [];
  for (let i = 0; i < _arr.length; i++) {
    if (_arr[i] % 2 !== 0) {
      oddSum += _arr[i];
      oddArr.push(_arr[i]);
    }
  }
  oddMin = Math.min(...oddArr);
  answer = String(oddSum) + ", " + String(oddMin);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
