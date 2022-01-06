function solution(brown, yellow) {
  var answer = [];
  let yellowX = yellow;
  let yellowY = 1;
  while (yellowX >= yellowY) {
    if (yellow % yellowY === 0) {
      yellowX = yellow / yellowY;
      let result = yellowY * 2 + (yellowX * 2 + 4);

      if (result === brown) {
        return (answer = [yellowX + 2, yellowY + 2]);
      }
    }
    yellowY++;
  }
  return answer;
}

console.log(solution(8, 1));
