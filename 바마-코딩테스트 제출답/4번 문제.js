function solution(topping, tasting) {
  let moveMemory1 = Array(301).fill(0);
  let moveMemory2 = Array(301).fill(0);
  let pizzaSize = topping.length;
  let answer = 0;
  let postT1 = 1;
  let postT2 = 1;

  for (let i = 0; i < tasting.length; i++) {
    let t1 = 0;
    let t2 = 0;
    for (let j = 0; j < topping.length; j++) {
      if (topping[j] === tasting[i]) {
        if (t1 === 0) t1 = j + 1;
        else {
          t2 = j + 1;
          break;
        }
      }
    }

    let moveT1 = move(postT1, t1, pizzaSize); // 이전 이동 위치에서 t1이 이동 한 시간
    let moveT2 = move(postT2, t1, pizzaSize); // 이전 이동 위치에서 t1가 이동 한 시간

    if (moveMemory1[i] + moveT1 < moveMemory2[i] + moveT2) {
      moveMemory1[i + 1] = moveMemory1[i] + moveT1;
    } else {
      moveMemory1[i + 1] = moveMemory2[i] + moveT2;
    }

    moveT1 = move(postT1, t2, pizzaSize); // 이전 이동 위치에서 t2이 이동 한 시간
    moveT2 = move(postT2, t2, pizzaSize); // 이전 이동 위치에서 t2가 이동 한 시간

    if (moveMemory1[i] + moveT1 < moveMemory2[i] + moveT2) {
      moveMemory2[i + 1] = moveMemory1[i] + moveT1;
    } else {
      moveMemory2[i + 1] = moveMemory2[i] + moveT2;
    }

    postT1 = t1;
    postT2 = t2;
  }
  answer = Math.min(moveMemory1[tasting.length], moveMemory2[tasting.length]);
  return answer;
}
function move(post, now, size) {
  if (Math.abs(now - post) > size / 2) {
    if (now > post) {
      return post + (size - now);
    } else return now + (size - post);
  } else return Math.abs(now - post);
}
console.log(solution([2, 1, 3, 1, 2, 4, 4, 3], [3, 1, 2, 4]));
