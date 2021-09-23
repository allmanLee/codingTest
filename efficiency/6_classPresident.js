function solution(s) {
  let answer;
  let map = new Map();
  const _s = [...s];

  _s.forEach((el) => {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else map.set(el, 0);
  });
  return map;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
