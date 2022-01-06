function solution(info, badugs) {
  let answer = Number.MIN_SAFE_INTEGER;
  const BDSum = info[0];
  const BDLength = info[1];
  function DFS(L, sum) {
    if (sum > BDSum) return;
    if (L === BDLength) {
      if (answer < sum) answer = sum;
    } else {
      DFS(L + 1, sum + badugs[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
let arr1 = [259, 5];
let arr2 = [81, 58, 42, 33, 61];
console.log(solution(arr1, arr2));
