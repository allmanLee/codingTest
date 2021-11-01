/*
 * A와 B의 길이가 다르면, 짧은 것이 먼저 온다.
 * 만약 서로 길이가 같다면, A의 모든 자리수의 합과 B의 모든 자리수의 합을 비교해서 작은 합을 가지는 것이 먼저온다. (숫자인 것만 더한다)
 * 만약 1,2번 둘 조건으로도 비교할 수 없으면, 사전순으로 비교한다. 숫자가 알파벳보다 사전순으로 작다.
 */

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let count = input[0]; // 2
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== "") {
//     numbers.push(input[i].split(" "));
//   }
// }

// numbers = numbers.flat();
// solution(numbers);

function solution(arr) {
  var _arr = [...arr];

  var sortArr = _arr.sort((a, b) => {
    const nameOrder = (nameA, nameB) => {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    };
    const sumOnlyNumber = (a, b) => {
      const sumA = a
        .split("")
        .filter((el) => /[0-9]/.test(el))
        .reduce((acc, el) => acc + +el, 0);
      const sumB = b
        .split("")
        .filter((el) => /[0-9]/.test(el))
        .reduce((acc, el) => acc + +el, 0);
      return sumA - sumB !== 0 ? sumA - sumB : nameOrder(a, b);
    };
    
    const minSizeSort =
      a.length - b.length !== 0 ? a.length - b.length : sumOnlyNumber(a, b);

    return minSizeSort;
  });

  return sortArr;
}

let arr = ["ABCD", "145C", "A", "A910", "Z321"];
//출력
console.log(solution(arr));
