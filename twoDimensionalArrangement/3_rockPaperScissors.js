//정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
//가위 바위 보 문제는 안나올꺼 같다. 패쓰

function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.lenth; i++) {
    if (a[i] === b[i]) answer += "D";

    if (a[i] < b[i]) {
      answer += "A";
    } else {
      answer += "B";
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
