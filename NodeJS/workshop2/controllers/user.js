
const userModel= require("../models/user")
module.exports.register = (req,res) => {
    res.send(req.body);
    userModel.insert(req.body);
    
}


module.exports.get = (req,res) => {
    res.send(req.body);
}

module.exports.update = (req,res) => {
    res.send(req.body);
}

module.exports.delete = (req,res) => {
    res.send(req.body);
}