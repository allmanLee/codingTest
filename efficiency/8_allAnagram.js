function mapSet(arr) {
  const m = new Map();
  arr.forEach((el) => {
    if (m.has(el)) {
      m.set(el, m.get(el) + 1);
    } else m.set(el, 1);
  });
  return m;
}
function compareMap(mapAll, mapFind) {
  let is_compared = true;
  console.log(mapAll, mapFind);
  for ([key, value] of mapFind) {
    if (mapAll.has(key) && mapAll.get(key) === value) {
      is_compared = true;
    } else {
      is_compared = false;
      break;
    }
  }
  console.log(is_compared);
  return is_compared;
}
console.log(typeof null === typeof Object);
function solution(s, t) {
  const stringArr = [...s];
  const stringFind = [...t];
  let nowMap = new Map();

  let map_st_find = mapSet(stringFind);
  let lp = 0,
    rp = stringFind.length - 1;
  let answer = 0;

  while (rp < stringArr.length) {
    const Arr = [];
    for (let i = lp; i < rp + 1; i++) {
      Arr.push(stringArr[i]);
    }
    nowMap = mapSet(Arr);
    if (compareMap(nowMap, map_st_find)) {
      answer++;
    }
    lp++;
    rp++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
