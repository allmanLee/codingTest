function solution(lottos, win_nums) {
  let answer = [];
  let _win_nums = [...win_nums];
  let tmp = [];

  let collect = lottos.filter((el) => {
    if (el === 0) {
      tmp.push(0);
    }
    return _win_nums.includes(el);
  });

  console.log(collect.legnth);
  console.log(tmp.length);
  //zero 가 다 맞았을경우
  answer;

  //zero 가 다 틀렸을 경우
  answer.push();

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
