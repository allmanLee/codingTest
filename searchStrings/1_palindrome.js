function solution(s) {
  let answer = "YES";
  let toLoverCaseS = String(s).toLowerCase();
  let reverseToLoverCaseS = Array.from(toLoverCaseS).reverse();
  if (toLoverCaseS === reverseToLoverCaseS.join("")) return true;
  else return false;
}
let str = "gooog";
console.log(solution(str));
