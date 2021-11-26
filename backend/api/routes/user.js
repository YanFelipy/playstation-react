module.exports = app => {
    const controller = require('../controllers/userController')();
  
    app.route('/api/v1/user')
      .get(controller.listUser);
  }