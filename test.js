const { exec } = require('child_process');
const args = process.argv;
console.log('ARGS:', args[2]);
const myFunc = args[2] || '';
const userValue = eval(
  myFunc +
    `${myFunc.slice(
      myFunc.indexOf(' ') + 1,
      myFunc.indexOf('(')
    )}([1, 1, 2, 3, 4, 5], 7)`
);

let funcBody = myFunc.slice(myFunc.indexOf('{'), myFunc.lastIndexOf('}') + 1);
let funcArgs = myFunc.slice(myFunc.indexOf('(') + 1, myFunc.indexOf('{') - 2);
const myFuncCall = new Function(funcArgs, funcBody);

function generateData(n) {
  let set = [];
  let rando;
  for (let i = 0; i < n; i++) {
    rando = Math.floor(Math.random() * 100);
    set.push(rando);
  }
  return set;
}

let small = generateData(20);
let med = generateData(100);
let large = generateData(500);
let xl = generateData(1000);
console.log('solution', userValue);

console.time('myFuncCall');
myFuncCall(xl, 100000);
console.timeEnd('myFuncCall');

console.time('myFuncCall');
myFuncCall(large, 100000);
console.timeEnd('myFuncCall');

console.time('myFuncCall');
myFuncCall(med, 100000);
console.timeEnd('myFuncCall');

console.time('myFuncCall');
myFuncCall(small, 100000);
console.timeEnd('myFuncCall');
