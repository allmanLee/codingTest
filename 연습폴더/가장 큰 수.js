function solution(numbers) {
  let answer = "";

  const _n = numbers.map((el) => el + "").sort((a, b) => +(b + a) - +(a + b));
  const join_n = _n.join("");
  if (join_n === 0) {
    return "0";
  }
  return join_n;
}

//b-a  => ba - ab =>  53 - 35  =  [a,b ]
// 양수 나오면 자리를 바꿔요 [10,4] =>a,b => a-b (오름차순)  10 - 4   [4, 10]
numbers = [3, 30, 34, 5, 9];
console.log(solution(numbers));
