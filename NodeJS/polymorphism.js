class Shape {
    constructor(name) 
    {
      this.name = name;
    }
    getArea() 
    {
      return 0; 
    }
  }
  
  class Rectangle extends Shape 
  {
    constructor(width, height)
    {
      super("Rectangle");
      this.width = width;
      this.height = height;
    }
    getArea() 
    {
      return this.width * this.height;
    }
  }
  
  
  function displayShapeAreas(shapes) {
    for (const shape of shapes) 
    {
      console.log(`The area of the ${shape.name} is: ${shape.getArea()}`);
    }
  }
  
  const rectangle = new Rectangle(5, 8);
  
  displayShapeAreas([rectangle]);
  