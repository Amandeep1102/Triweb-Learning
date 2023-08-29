
const mongoose = require("mongoose"); 

mongoose
    .connect("mongodb://127.0.0.1:27017") 
    .then((success) => app.listen(3000)) 
    .catch((err) => console.log(err.message));