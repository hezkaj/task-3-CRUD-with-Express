const data = require('../data');

module.exports = async(req, res) => {
    const id = req.params.id;
    const {name, age}=req.body;
    if(name&&age){
        const user=await data.getUserByID(id);
        if(user==''){
            res.status(404).send('Rout not found')
        }else{
            const updatedUser=await data.updateUser(id, name, parseInt(age));
            res.end(JSON.stringify(updatedUser));
        }
    } 
    else{
        res.status(400).send('Name and age are reqired')
    }
}