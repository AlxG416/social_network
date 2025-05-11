var bcrypt = require("bcrypt");

var { User } = require("../models/models");
var { validateEmail, compareStrings } = require("../utils/utils");

class authController {
    async registrate(req, res) {
        var body = req.body;
        var numberOfProperties = Object.keys(body).length;
        var { name, surname, email, password, confirm } = body;
        if(numberOfProperties !== 5 || !name || !surname || !validateEmail(email) || !compareStrings(password, confirm)) {
            return res.json({serverMessage: 'denied'});
        }
        var dbUser = await User.findOne({where: {email}});
        if(!(dbUser === null)) {
            return res.json({serverMessage: 'denied'});
        }
        var hashedPassword = await bcrypt.hash(password, 5);
        delete body.confirm;
        var newUser = await User.create({...body, password: hashedPassword});
        delete newUser.dataValues.password;
        return res.json({serverMessage: 'success', payload: newUser.dataValues});
    }

    async login(req, res) {
        var body = req.body;
        var numberOfProperties = Object.keys(body).length;
        var { email, password } = body;
        if(numberOfProperties !== 2 || !validateEmail(email) || !password) {
            return res.json({serverMessage: 'denied'});
        }
        var dbUser = await User.findOne({where: {email}});
        if (dbUser === null) { 
            return res.json({serverMessage: 'denied'});
        }
        if (bcrypt.compareSync(password, dbUser.dataValues.password)) {
            delete dbUser.dataValues.password;
            return res.json({serverMessage: 'success', payload: dbUser.dataValues});
        } else {
            return res.json({serverMessage: 'denied'});
        }
    }
}

module.exports = new authController();
