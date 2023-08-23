const xyz=()=>{
    console.log('XYZ',this);
}
xyz();

let arr1=[1,2,3,4]; 
const arrmap1=arr.map(function(element){
    return element*2; //normal function 
})
console.log(arrmap);

const arrmap=arr.map(element => element*2)
console.log(arrmap);//arrow function makes it short

const retobj=(uname,age)=> ({uname:uname,age:age})
console.log(retobj("alex",30));

const addnum=(num1,num2)=> num1+num2;
console.log(addnum(2,4));

let arr=[1,2,3,4,5];
 
arr.forEach((e)->{
    console.log(e," ");
    })
