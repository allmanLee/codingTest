function solution(times) {
  let answer = 0;
  let endpoint = 0;
  const _t = [...times.map((el) => el.slice())];
  _t.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  });

  _t.forEach((el, index) => {
    let count = 0;
    if (index === 0) endpoint = el[1];

    for (let i = index; i < _t.length; i++) {
      if (endpoint > _t[i][0]) count++;
      else {
        if (count > answer) answer = count;
        break;
      }
    }
  });
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
