function thisop()
{
    this.x = 5;
}

let y = new thisop();
let z = new thisop();

console.log(y);

z.x = 8;
console.log(z);