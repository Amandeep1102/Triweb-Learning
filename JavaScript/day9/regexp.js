let str = "Hi I am here. I am attending a workshop.";

let regx = /\w/

console.log(str.match(regx));


let str = 'Hi I am here';
let regex = new RegExp('am');

let res = regex.test(str);
console.log(res);