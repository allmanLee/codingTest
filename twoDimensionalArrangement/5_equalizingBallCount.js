function solution(arr) {
  const _arr = [...arr];
  const answer = [];

  _arr.sort((a, b) => {
    return b - a;
  });

  _arr.forEach((el) => {
    answer.push(arr.indexOf(el) + 1);
  });

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
