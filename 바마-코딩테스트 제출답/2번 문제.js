function solution(n, a, b) {
  let answer = 0;
  let tmp = 0;
  if (a > b) {
    tmp = a;
    a = b;
    b = tmp;
  }

  while (1) {
    answer++;
    if (b - a === 1 && b % 2 === 0) {
      break;
    }
    a = Math.round(a / 2);
    b = Math.round(b / 2);
  }
  return answer;
}
