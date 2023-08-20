let newMap = new Map()
newMap.set("name","Amandeep")

console.log(newMap);//Map(1)

newMap.set("address","dehradun ");
console.log(newMap);//Map(2) 

newMap.set("mobile",8000000060)
console.log(newMap);//Map(3) 

console.log("Number of Element in Map = ",newMap.size);

const studentName = newMap.get('name');
console.log("Name from Map is ",studentName); 

newMap.set(1,"First");
console.log(newMap);//map(4)

let valOf1 = newMap.get(1);
console.log("Val of 1 is ",valOf1);