function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let ch = 0;
  function DFS(L, S) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = S; i < n; i++) {
        if (ch[i] !== 1) {
          console.log(L);
          ch[i] = 1;
          tmp[L] = i;
          DFS(L + 1, S + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
