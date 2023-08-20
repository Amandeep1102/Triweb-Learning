let name1 = {name:"Hello"}
m = {[name1]:"Aman"}

name1 = "My Name"
name2 = {name:"Helloji"}
console.log(m[name2]);
console.log(m);

let wMap = new WeakMap()
obj1 = {}
obj2 = {1:1}
obj3 = {2:2}
wMap.set(obj1,"val1")
wMap.set(obj2,"val2")
wMap.set(obj3,"val3")



