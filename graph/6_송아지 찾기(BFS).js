function solution(s, e) {
  let answer = 0;
  let level = 0;
  // const ch = Array.from({ length: 10000 }, () => 0);
  const que = [];
  //que 에 넣을때 레벨을 부여
  que.push([s, 0]);
  console.log(que[que.length - 1][1]);

  while (que.length) {
    let x = que[0][0];
    let y = que[0][1];
    for (dr of [x - 1, x + 1, x + 5]) {
      if (dr > 0 && dr <= 10000) {
        que.push([dr, y + 1]);
      }
      if (dr === e) {
        return que.pop()[1];
      }
    }
    que.shift();
  }

  return answer;
}

console.log(solution(5, 14));

par;
