function solution(n) {
  let answer;
  //소수점 올림해버린다
  //ceil(올림), floor(내려버린다), round(반올림), abs(절대값), sqrt(제곱근)
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));
