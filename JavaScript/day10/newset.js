let newSet = new Set()

newSet.add(34);
newSet.add(44);
newSet.add(54);
newSet.add(64);


//unique elements
newSet.add(64);

console.log("Size of old set is ",newSet.size);

if(newSet.has(64))
{
    console.log("The method is working fine")
}

newSet.delete(64)
console.log(newSet);
console.log("Size of new set is ",newSet.size);


for (const element of newSet) 
{
    console.log("Element: ",element);
}