function solution(c, arr) {
  let answer = 0;
  let _arr = [...arr];
  const check = Array.from({ length: arr.length }, () => 0);
  const arrSum = _arr.reduce((acc, item) => {
    return acc + item;
  }, 0);

  function DFS(L) {
    let sum = 0;
    if (L === _arr.length + 1) {
      for (let i = 0; i < check.length; i++) {
        if (check[i] === 1) {
          sum += _arr[i];
        }
      }
      if (c > sum) {
        console.log(sum);
        answer = sum;
      }
    } else {
      check[L] = 1;
      DFS(L + 1);
      check[L] = 0;
      DFS(L + 1);
    }
  }

  DFS(0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
