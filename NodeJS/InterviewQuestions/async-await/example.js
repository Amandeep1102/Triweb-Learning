async function giveMeName() {
    return "Amandeep";
  }
  
  async function main() {
    const name = await giveMeName();
    console.log("Name is ", name);
  }
  
  main();