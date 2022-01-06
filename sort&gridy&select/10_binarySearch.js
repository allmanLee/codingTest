function solution(target, arr) {
  const _arr = [...arr];
  let answer = 0;
  let lt = 0;
  let rt = _arr.length - 1;
  let mid = parseInt(_arr.length - 1 / 2 + 1);
  _arr.sort((a, b) => {
    return a - b;
  });
  while (lt <= rt) {
    mid = parseInt((lt + rt) / 2);
    if (_arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (_arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
