class Person 
{
    //class and constructor same name
    constructor(name, age) 
    {
      this.name = name;
      this.age = age;
    }
    
    greeting() 
    {
      console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("aman", 25);
  const person2 = new Person("rahul", 30);
  
  person1.greeting();
  person2.greeting();
  