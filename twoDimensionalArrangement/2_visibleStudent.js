//앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
function solution(arr) {
  let answer = 0;
  let max = 0;
  const _arr = [...arr];

  _arr.forEach((item) => {
    if (max < item) {
      max = item;
      answer++;
    }
  }, 0);

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
