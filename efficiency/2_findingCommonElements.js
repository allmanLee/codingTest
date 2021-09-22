function solution(arr1, arr2) {
  let answer = [];
  const tmp = [];
  const _arr1 = [...arr1].sort((a, b) => a - b);
  const _arr2 = [...arr2].sort((a, b) => a - b);
  console.log(_arr1, _arr2);
  let p1 = 0;
  let p2 = 0;
  while (p1 < _arr1.length && p2 < _arr2.length) {
    if (_arr1[p1] === _arr2[p2]) {
      tmp.push(_arr1[p1]);
      console.log(`아니 이게 같다? ${_arr1[p1]} ${_arr2[p2]}`);
      p1++;
      p2++;
    } else {
      console.log(`아니 이게 왜? ${_arr1[p1]} ${_arr2[p2]}`);
      if (_arr1[p1] < _arr2[p2]) p1++;
      else p2++;
      console.log(p1, p2);
    }
  }
  return tmp;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
