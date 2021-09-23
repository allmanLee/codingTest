function setMap(arr) {
  const map_set = new Map();
  arr.forEach((el) => {
    if (map_set.has(el)) {
      map_set.set(el, map_set.get(el) + 1);
    } else map_set.set(el, 1);
  });
  const sortMap = new Map([...map_set.entries()].sort());
  return sortMap;
}

function solution(str1, str2) {
  let answer = "YES";
  const arr_s1 = [...str1];
  const arr_s2 = [...str2];
  const map_s1 = setMap(arr_s1);
  const map_s2 = setMap(arr_s2);

  for ([key, value] of map_s1) {
    if (!map_s2.has(key) || value !== map_s2.get(key)) {
      answer = "NO";
    }
  }

  return answer;
}

let a = "AbaAeCe";
let b = "AabAeeC";
console.log(solution(a, b));
