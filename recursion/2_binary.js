function solution(n) {
  let answer = "4";
  function DFS(x) {
    if (x === 0) {
      console.log(answer);
      return answer;
    } else {
      DFS(parseInt(x / 2));
      answer += String(x % 2);
    }
  }

  return DFS(n);
}

console.log(solution(11));
