const data = require('../data');

module.exports = async(req, res) => {
    const users=await data.getUsers();
    res.end(JSON.stringify(users));
}