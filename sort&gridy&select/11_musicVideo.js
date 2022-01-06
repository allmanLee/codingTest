function solution(m, songs) {
  let _arr = [...songs];
  let lt = Math.max(..._arr);
  let rt = _arr.reduce((acc, el) => {
    return acc + el;
  }, 0);

  while (rt <= lt) {
    mid = rt + lt / 2;
    if (count() === mid) {
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
