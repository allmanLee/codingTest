function solution(test) {
  let _arr = [...test];
  let answer = {};
  let pointNum = 0;
  let count = 0;
  let mentiArr = [];

  for (let k = 0; k < _arr[0].length; k++) {
    //만약 pointNum이 멘토라면
    mentiArr = [];
    pointNum = _arr[0][k];
    for (let i = 0; i < _arr.length; i++) {
      for (let j = _arr[i].indexOf(pointNum) + 1; j < _arr[i].length; j++) {
        mentiArr.push(arr[i][j]);
      }
    }
    count = 0;
    answer = mentiArr.reduce((acc, item, index) => {
      return (acc[item] = ++acc[item] || 1), acc;
    }, {});
    console.log(answer);
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
