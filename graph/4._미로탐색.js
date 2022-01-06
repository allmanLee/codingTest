function solution(board) {
  let answer = 0;
  dir_x = [1, 0, -1, 0];
  dir_y = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let dx = x - dir_x[i];
        let dy = y - dir_y[i];
        if (dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6 && board[dx][dy] === 0) {
          board[dx][dy] = 1;
          DFS(dx, dy);
          board[dx][dy] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
