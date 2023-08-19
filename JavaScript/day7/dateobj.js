let date = "2002 02 22 07:15:16";
console.log(date);

let dateObj = new Date(date);

console.log("Month",dateObj.getMonth());
console.log("FullYear",dateObj.getFullYear());
console.log("Date",dateObj.getDate());
console.log("time",dateObj.getTime());
console.log("hour",dateObj.getHours());

dateObj.setMonth(7);
console.log(dateObj);