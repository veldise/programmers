const arr = [];
for (let t = 0; t < 100000000; t++) {
  arr.push(t);
}

const cntMap = {};

console.time("test");
// for (let t = 0; t < 100000000; t++) {
//   cntMap[t] = (cntMap[t] || 0) + 1;
//   // cntMap[t] = cntMap[t] ? cntMap[t] + 1 : 1;
// }
arr.forEach((t) => {
  cntMap[t] = (cntMap[t] || 0) + 1;
});
console.timeEnd("test");
