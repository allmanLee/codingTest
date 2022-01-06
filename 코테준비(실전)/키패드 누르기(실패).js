function solution(numbers, hand) {
  var answer = "";
  var pad = Array.from({ length: 4 }, (el, y) =>
    Array.from({ length: 3 }, (el, x) => Number(3 * Number(y) + Number(x)) + 1)
  );

  let LH = [0, 3];
  let RH = [3, 3];
  let center = [2, 5, 8, 0];
  for (let i = 0; i < numbers.length; i++) {
    //왼손으로 실행
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      HandMove("LH", numbers[i]);
    }
    //오른손으로 실행
    else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      HandMove("RH", numbers[i]);
    } else {
      let centerIDX = center.indexOf(numbers[i]);
      if (Math.abs(LH[1] - centerIDX) < Math.abs(RH[1] - centerIDX)) {
        HandMove("LH", numbers[i]);
      } else if (Math.abs(LH[1] - centerIDX) > Math.abs(RH[1] - centerIDX)) {
        HandMove("RH", numbers[i]);
      } else {
        if (hand === "right") {
          HandMove("RH", numbers[i]);
        } else {
          HandMove("LH", numbers[i]);
        }
      }
    }
  }

  function HandMove(Hand, bePushedNum) {
    answer += Hand === "LH" ? "L" : "R";

    console.log(bePushedNum);
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 3; x++) {
        if (pad[y][x] === bePushedNum) {
          if (Hand === "LH") {
            LH = [x, y];
          } else {
            RH = [x, y];
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
