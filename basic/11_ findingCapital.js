function solution(s) {
  let answer = 0;
  const _s = [...s];

  answer = String(_s).match(/[A-Z]/g).length;

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
