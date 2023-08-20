function Student(name, age)
{
    this.name = name;
    this.age = age;
}

let student1 = new Student("Rahul",54);
let student2 = new Student("Amandeep",21);

console.log("---------------------------")

console.log(Student.prototype);

Student.prototype.display = function()
{
    console.log(`Hi ${this.name}`);
}

student1.display();
student2.display();
