function solution(s) {
  let count = 1;
  let answer = "";
  const _s = [...s];
  for (let i = 0; i < _s.length; i++) {
    if (_s[i] !== _s[i - 1]) {
      if (count > 1) {
        answer += String(count);
        count = 1;
      }
      answer += _s[i];
    } else {
      count++;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
