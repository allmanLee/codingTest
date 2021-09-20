function solution(n, arr) {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  let stringEl = "";
  let Digits = 0;
  let _arr = [...arr];
  let result = 0;
  //큰값부터 소트
  _arr.sort((a, b) => b - a);

  answer = new Array(_arr.length).fill(0);
  _arr.forEach((element, index) => {
    stringEl = Array.from(String(element));

    for (let i = 0; i < stringEl.length; i++) {
      answer[index] += Number(stringEl[i]);
    }
  });

  max = Math.max(...answer);
  result = _arr[answer.indexOf(max)];
  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
