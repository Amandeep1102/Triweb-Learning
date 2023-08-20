let objInit = {name:"Aman", address:"dehhradun"}
console.log(objInit);


function emplyee(name, designation, salary, age) 
{
    this.name = name;
    this.designation = designation;
    this.payment = salary;
    this.age = age
}

let objFn = new emplyee("amandeep","student",0,30)
let objFn1 = new emplyee("Rahul","CA",80000,28)
console.log(objFn);
console.log(objFn1);

