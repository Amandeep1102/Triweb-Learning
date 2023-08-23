{
    let x=1;
}
console.log(x); //Reference Error because blocked scoped variable

let y=0;
{
    var x=5
    y=8;
}
console.log(x);
console.log(y);