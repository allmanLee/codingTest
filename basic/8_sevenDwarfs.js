function solution(arr) {
  let tmpSum = 0;
  let answer = 0;
  let notDwarfs_1, notDwarfs_2;
  const _arr = [...arr];
  const total = _arr.reduce((a, b) => a + b, 0);
  //7개를 어떻게 선택할까?
  //문제를 해결하는 방안에대한 난이도가 있는것 같다고 느낌
  //전부 더하고 두개씩 뺀다. 그래도 혼자서 해결 완료

  for (let x = 0; x < _arr.length; x++) {
    for (let y = x; y < _arr.length; y++) {
      tmpSum = _arr[x] + _arr[y];
      if (total - tmpSum == 100) {
        notDwarfs_1 = _arr[x];
        notDwarfs_2 = _arr[y];
      }
    }
  }
  _arr.splice(_arr.indexOf(notDwarfs_1), 1);
  _arr.splice(_arr.indexOf(notDwarfs_2), 1);
  answer = _arr;
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
