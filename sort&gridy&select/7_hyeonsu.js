function solution(arr) {
  let answer = [];
  let _arr = [...arr];
  let min = Number.MAX_SAFE_INTEGER;
  //선택정렬로 풀어보았다.
  for (let i = 0; i < _arr.length; i++) {
    min = arr[i];
    tmp = arr[i];
    for (let j = i; j < _arr.length; j++) {
      console.log(i, j, min, _arr[j]);
      if (_arr[i] > _arr[j]) {
        _arr[i] = _arr[j];
        _arr[j] = tmp;
      }
    }
    if (tmp !== _arr[i]) {
    }
  }
  console.log(_arr);
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
