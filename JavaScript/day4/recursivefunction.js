
function printNumSeries(num)
{
    for(let i = num; i>0; i--)
    {
        console.log(i);
    }
}
printNumSeries(5);



function printNumSeriesRecursion(num)
{
 
    if(num == 0)
    {
        return 0;
    }
    console.log(num);
    num--;
    printNumSeriesRecursion(num);
}
printNumSeriesRecursion(5);


const printSeries = function printNumSeriesRecursion(num){
 
    if(num == 0){
        return 0;
    }
    console.log(num);
    num--;

    //Method 2
    // printNumSeriesRecursion(num);

    //Method 3
    arguments.callee(num);  // nice way
}
printSeries(5);