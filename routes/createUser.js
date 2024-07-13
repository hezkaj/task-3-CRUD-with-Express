const data = require('../data');

module.exports =async (req, res) => {
    const {name, age}=req.body;
    if(name&&age){
        const user= await data.addUser(name,parseInt(age));
        res.end(JSON.stringify(user));
       } 
       else{
        res.status(400).send('Name and age are reqired')
       }
}