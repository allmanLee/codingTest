function solution(board, moves) {
  let _arr = board.map((el) => el.slice());
  let answer = 0;
  let stack = [];
  moves.forEach((el, index) => {
    const pos = el - 1;
    for (let i = 0; i < _arr.length; i++) {
      if (_arr[i][pos] > 0) {
        if (stack[stack.length - 1] === _arr[i][pos]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(_arr[i][pos]);
          _arr[i][pos] = 0;
        }
        break;
      }
    }
  });
  console.log(board[3][3]);
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
