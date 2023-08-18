let decideFun = 'subtract';

let Result;
if(decideFun == 'add')
{
    Result = function(num1, num2)
    {
        console.log(num1+num2);
    }
}else if(decideFun == 'subtract')
{
    Result = function(num1, num2)
    {
        console.log(num1-num2);
    }
}
Result(5,3);