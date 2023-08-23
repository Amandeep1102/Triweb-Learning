function add2num(num1,num2,...num) //rest parameter
{
    let sum=0
    number.forEach((e) =>{
      sum=sum+e;  
    });
    return sum;
}

let res=add2num(1,2);
console.log(res);

let res2=add3num(2,3,5);
console.log(res2);