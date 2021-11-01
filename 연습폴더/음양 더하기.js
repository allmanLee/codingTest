function solution(absolutes, signs) {
  var answer = absolutes
    .map((el, i) => (signs[i] ? `+${el}` : `-${el}`))
    .reduce((acc, el) => {
      return acc + +el;
    }, 0);
  return answer;
}
const absolutes = [4, 7, 12];
const signs = [true, false, true];
console.log(solution(absolutes, signs));
