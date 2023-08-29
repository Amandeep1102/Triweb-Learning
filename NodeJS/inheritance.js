class Vehicle 
{

    constructor(type) 
    {
      this.type = type;
    }
    getInfo() 
    {
      console.log(`This is a ${this.type}.`);
    }
}

class Car extends Vehicle 
{
    constructor(type, brand) 
    {
      super(type);
      this.brand = brand;
    }
  
    getInfo() 
    {
      console.log(`This is a ${this.brand} car.`);

    }
}
  const myCar = new Car("car", "Hyundai");
  myCar.getInfo();
  