function solution(n) {
  let answer = 0;
  let _n = [...String(n)];

  for (let i = 0; i < _n.length; i++) {
    console.log(_n[i]);
    answer += parseInt(_n[i]);
  }
  console.log(_n);

  return answer;
}
