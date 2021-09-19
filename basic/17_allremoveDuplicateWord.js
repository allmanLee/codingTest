function solution(s) {
  let answer = [];
  const _s = [...s];

  //forEach 로 코딩
  _s.forEach((el, index) => {
    if (_s.indexOf(el) === index) answer.push(el);
  });

  //filter 로 코딩
  _s.filter((el, index) => {
    return _s.indexOf(el) === index;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
