var { User } = require("../models/models");

class usersController {
    async getAll(req, res) {
        var users = await User.findAll();;
        users = users.map(user => {
            delete user.dataValues.password;
            return user;
        });
        return res.json({serverMessage: 'success', payload: users});
    }
    async getUser(req, res) {
        var body = req.body;
        var bodyKeys = Object.keys(body);
        if(bodyKeys.length !== 1 || isNaN(Number(body.id) || NaN)) {
            return res.json({serverMessage: 'denied'});
        }
        var user = await User.findByPk(Number(body.id));
        if(user === null) {
           return res.json({serverMessage: 'denied'}); 
        }
        delete user.dataValues.password;
        return res.json({serverMessage: 'success', payload: user});
    }
}

module.exports = new usersController();
