function solution(meeting) {
  const _meeting = [...meeting.map((el) => el.slice())];
  let answer = 0;
  let count = 0;
  let endTime = 0;
  _meeting.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  _meeting.forEach((el, index) => {
    console.log(el);
    if (index === 0) {
      count = 1;
      endTime = el[1];
    } else {
      if (endTime <= el[0]) {
        endTime = el[1];
        count++;
      }
    }
  });
  answer = count;
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
