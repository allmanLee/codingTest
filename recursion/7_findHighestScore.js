function solution(m, ps, pt) {
  let answer = 0;
  const ch = Array.from({ length: ps.length }, () => 0);
  function DFS(L, S, T) {
    if (L === ps.length + 1) {
      if (T <= m) {
        answer = Math.max(answer, S);
      }
    } else {
      ch[L] = 1;
      DFS(L + 1, S + ps[L], T + pt[L]);
      ch[L] = 0;
      DFS(L + 1, S, T);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
