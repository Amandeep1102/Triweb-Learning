let x = 9;

let y;
if(x%3 == 0)
{
    y = x;
}
else
{
    y = 0;
}
console.log("using if ",y);

let change = x%3==0?x:0; //ternary operator
console.log("using if ",change);