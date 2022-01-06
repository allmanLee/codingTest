function solution(info_1, coins) {
  let coinLength = info_1[0];
  let coinMaxium = info_1[1];

  let answer = Number.MAX_SAFE_INTEGER; //카운팅을 할것

  function DFS(L, sum) {
    if (sum > coinMaxium) return;
    if (L >= answer) return;
    if (sum === coinMaxium) answer = Math.min(answer, L);
    else {
      for (let i = 0; i < coinLength; i++) {
        DFS(L + 1, sum + coins[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}
let info_1 = [3, 15]; //number[]
let coins = [1, 2, 5]; //number[]
console.log(solution(info_1, coins));
