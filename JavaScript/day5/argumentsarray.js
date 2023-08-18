function addNumbers(){
    let sum = 0;

    let arr = Array.from(arguments);

    arr.forEach(element => {sum = sum + element; });
    
    console.log(sum);
}
addNumbers(1,2,3,4,5,6,7,8,9,10);