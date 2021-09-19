function solution(s) {
  let answer = "";
  const _s = [...s];

  _s.forEach((el) => {
    if (String(el).match(/[a-z]/)) {
      _s.splice(_s.indexOf(el), 1, String(el).toUpperCase());
    }
    answer += _s[_s.indexOf(el)];
  });
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
