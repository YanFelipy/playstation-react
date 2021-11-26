module.exports = () => {
    const UserDB = require('../data/user.json');
    const controller = {};
  
    controller.listUser = (req, res) => res.status(200).json(UserDB);
  
    return controller;
  }