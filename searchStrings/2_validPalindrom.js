function solution(s) {
  let answer = "YES";
  const _s = s.match(/[a-zA-Z]/gi).join("");
  const _s_lo = String(_s).toLowerCase();
  const _s_lo_re = Array.from(_s_lo).reverse().join("");
  if (_s_lo === _s_lo_re) {
    answer = "YES";
  } else answer = "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
