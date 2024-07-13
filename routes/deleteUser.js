const data = require('../data');

module.exports =async (req, res) => {
    const id = req.params.id;
    const user= await data.getUserByID(id);
    if(user==''){
        res.status(404).send('Rout not found')
    }else{
        res.end(JSON.stringify(await data.deleteUser(id)));
    }   
};