let b = 9007199254740992
console.log(Number.isInteger(b));

console.log("Safe integer",Number.isSafeInteger(b));
console.log("Safe integer",Number.isSafeInteger(b));

console.log("isFinite",isFinite(20000/0));

console.log("isNaN", isNaN(2/'e'));