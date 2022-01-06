function solution(arr) {
  let answer = "NO";
  let ch = Array.from({ length: arr.length + 1 }, () => 0);
  let arrSum = arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  console.log(arrSum);

  function DFS(s) {
    let sum = 0;
    if (s === arr.length + 1) {
      for (let i = 1; i < ch.length + 1; i++) {
        if (ch[i] === 1) {
          sum += arr[i - 1];
        }
      }
      if (arrSum - sum === sum) {
        console.log(sum);
        answer = "YES";
      }
    } else {
      ch[s] = 1;
      DFS(s + 1);
      ch[s] = 0;
      DFS(s + 1);
    }
  }
  DFS(1);
  return answer;
}

let arr = [1, 2, 3, 7];
console.log(solution(arr));
