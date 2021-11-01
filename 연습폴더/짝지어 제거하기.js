function solution(s) {
  let answer = 0;
  let slength = s.length;
  let arr = s.split("");
  let pt = 0;
  while (pt < arr.length - 1) {
    if (arr[pt] === arr[pt + 1]) {
      arr.splice(pt, 2);
      pt = 0;
    } else ++pt;
  }
  if (arr.length === 0) answer = 1;
  return answer;
}
const strings = "baabaa";
console.log(solution(strings));
