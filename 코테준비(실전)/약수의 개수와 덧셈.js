function solution(left, right) {
  let answer = 0;

  const add = (yaksu) => {
    answer += yaksu;
  };
  const minus = (yaksu) => {
    answer -= yaksu;
  };

  const numbers = Array.from(
    { length: right - left + 1 },
    (el, index) => index + left
  );

  numbers.forEach((el) => {
    let count = 0;
    // if (el === 1) return add(el);
    for (let i = 1; i <= el; i++) {
      if (el % i == 0) {
        count++;
      }
    }
    if (count % 2 === 0) add(el);
    else minus(el);
  });

  return answer;
}

console.log(solution(13, 17));
