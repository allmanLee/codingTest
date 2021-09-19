function solution(arr) {
  let answer;
  let _arr = [...arr];
  let sum = 0;
  const sums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  _arr.forEach((el, i) => {
    el.forEach((item, j) => {
      //각 열의 합
      sums[i] += item;

      //각 행의 합
      sums[j + 5] += item;

      //대각선의 합(1)
      if (i === j) {
        sums[10] += item;
      }

      //대각선의 합(2)
      if (4 - i === j) {
        sums[11] += item;
        console.log(item);
      }
    });
  });
  answer = Math.max(...sums);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
