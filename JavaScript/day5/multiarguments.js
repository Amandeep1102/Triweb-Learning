function addNumbers()
{
    let sum = 0;
    for (let i=0;i<arguments.length;i++) 
    {
        const element = arguments[i];
        sum = sum + element;
    }
    console.log(sum);
}
addNumbers(1,2,3,4,5,6,7,8,9,10);