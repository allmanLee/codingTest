function solution(n, k) {
  let answer;
  const que = Array.from({ length: n }, (el, index) => index + 1);
  while (que.length > 1) {
    console.log(que.length);
    for (let i = 0; i < k - 1; i++) que.push(que.shift());
    que.shift();
  }
  answer = que;
  return answer;
}

console.log(solution(8, 3));
