let obj = {
    age:56,
    get getAge()
    {
        return this.age;
    },
    set setAge(newAge)
    {
        this.age=newAge
    }
}

console.log(obj.getAge);
obj.setAge = 98;
console.log(obj.getAge);
