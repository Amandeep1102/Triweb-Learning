const str = "Hi I am waiting for you here.\nAnd its raining today";

const tmpltStr = `Hi I am here.
Its raining today`;
console.log(tmpltStr);

console.log("==================================");
const atmosphere = "raining";
const str1 = 'Hi I am here.\n Its "'+atmosphere+'" today';

const tmpltEmbdStr = `Hi I am here.
Its "${atmosphere}" today`;
console.log(tmpltEmbdStr);


