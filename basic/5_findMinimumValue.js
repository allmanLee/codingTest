function solution(arr) {
  const _arr = [...arr];
  // let min = Number.MAX_SAFE_INTEGER;
  let answer;
  //첫번째 방법
  // for (let i = 1; i < _arr.length; i++) {
  //   if (_arr[i] < min) min = _arr[i];
  // }
  //  answer = min;

  //두번째 방법
  //answer = Math.min(..._arr);

  //세번째 방법
  answer = Math.min.apply(null, arr);
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
