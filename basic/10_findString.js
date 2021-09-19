function solution(s, t) {
  let answer = 0;
  const _s = [...s];
  _s.forEach((el) => {
    if (el === t) answer++;
  });

  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
