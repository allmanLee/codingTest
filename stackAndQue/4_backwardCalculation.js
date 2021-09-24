function solution(s) {
  let _s = [...s];
  const stack = [];
  for (let i = 0; i < _s.length; i++) {
    let ln,
      rn = 0;
    if (!isNaN(_s[i])) {
      stack.push(_s[i]);
      console.log(stack);
    } else {
      rn = parseInt(stack.pop());
      ln = parseInt(stack.pop());
      if (_s[i] === "+") stack.push(ln + rn);
      else if (_s[i] === "-") stack.push(ln - rn);
      else if (_s[i] === "*") stack.push(ln * rn);
      else if (_s[i] === "/") stack.push(ln / rn);
      console.log(stack);
    }
  }
  return stack;
}

let str = "352+*9-";
console.log(solution(str));
