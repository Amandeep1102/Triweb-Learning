const cities = String("Dehradun,Roorkee,Delhi,Mussoorie");
const cityArr = cities.split(',');

console.log(cityArr);

cityArr.forEach((city)=>{ console.log("Hi it is ",city); });

