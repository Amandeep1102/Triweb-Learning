function Employee()
{
    this.department = "None";
    this.mobile = ''
}

function Manager(name)
{
    Employee.call(this)
    this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager


let Amandeep = new Manager("Amandeep");

console.log(Amandeep);

Amandeep.email = "adsm123@gmail.com";

console.log(Amandeep);

console.log(Amandeep.__proto__);

