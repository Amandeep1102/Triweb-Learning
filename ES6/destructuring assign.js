//let arr = [1,2,3,4];
//let [a,b] = arr;

//console.log("First element a: ",a);
//console.log("Second element b: ",b);
//[b,a] = [a,b];

//console.log("arr is :",arr);
//console.log("First element a: ",a);
//console.log("Second element b: ",b);


//object matching, shorthand notation
// function getstudent() {
//     let student = {
//     sname: "Azhar",
//     age: "31",
//     leclassvel: "MCA"
//     }
//     return student;
// }

// var {sname, age} = getStudent();
// console.log(sname, age);


// 3 Object Matching, Deep Matching
function getData(){
    let obj = {
        ename: "Amit",
        salary: 100000,
        location: {
            city: "Bangalore"
        }
    }
return obj;
}

let {ename: employeeName, salary: employeeSalary, location: {city: employeeCity}} = getData();
console.log("Ename:", employeeName, ", Salary: ", employeesalary, ", Location: ", employeeCity);