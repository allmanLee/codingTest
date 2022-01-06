function solution(n, arr) {
  let answer = 0;
  let tmp = [];
  const check = Array.from({ length: n }, () => 0);
  const graph = Array.from(Array(n + 1), () =>
    Array.from(Array(n + 1), () => 0)
  );
  for ([a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(L) {
    if (L === 5) {
      answer += 1;
      console.log(tmp);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[L][i] === 0) continue;
        if (check[i] !== 1) {
          check[i] = 1;
          tmp.push(i);
          DFS(i);
          check[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  check[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
