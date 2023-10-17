async function getName() {
    return "Amandeep";
  }
  
  (async () => {
    const name = await getName();
    console.log("Name is ", name);
  })();