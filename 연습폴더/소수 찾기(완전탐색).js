const isPrimeNum = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(numbers) {
  var answer = 0;
  let a = numbers.split("");
  console.log(a.length);
  for (let i = 1; i <= a.length; i++) {
    let element = Array.from({ length: i }, () => 0);
  }

  return answer;
}

let numbers = "17";
console.log(solution(numbers));
