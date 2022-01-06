function solution(progresses, speeds) {
  let p = [...progresses];
  const s = [...speeds];
  const pLength = p.length;
  let count = 0;
  let check = [];
  let stack = []; /*스택*/
  let answer = [];

  while (count !== pLength) {
    //하루에 한번씩 다운로드
    for (let i = 0; i < pLength; i++) {
      p[i] += s[i];

      if (p[i] >= 100) {
        stack.push(i);
      }
    }
    //하루에 한번씩 업데이트
    for (el of stack) {
      let test = true;
      for (let i = 0; i < el; i++) {
        if (!(p[i] >= 100)) {
          test = false;
          break;
        }
      }
      if (test === true) {
        stack.pop();
        count++;
      }
      answer.push(count);
    }
  }

  return answer;
}
const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
console.log(solution(progresses, speeds));
