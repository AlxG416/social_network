var { Post, User } = require("../models/models");

class postsController {
    async create(req, res) {
        var body = req.body;
        var bodyKeys = Object.keys(body);
        if(bodyKeys.length !== 3 || !body.title || !body.content || isNaN(Number(body.userId) || NaN)) {
            return res.json({serverMessage: 'denied'});
        }
        var dbUser = await User.findByPk(Number(body.userId));
        if(dbUser === null) {
            return res.json({serverMessage: 'denied'});
        }
        var createdPost = await Post.create({...body, userId: Number(body.userId)});
        return res.json({serverMessage: 'success', payload: createdPost.dataValues});
    }

    async delete(req, res) {
        var body = req.body;
        var bodyKeys = Object.keys(body);
        if(bodyKeys.length !== 2 || isNaN(Number(body.id) || NaN) || isNaN(Number(body.userId) || NaN)) {
            return res.json({serverMessage: 'denied'});
        }
        var dbUser = await User.findByPk(Number(body.userId));
        if(dbUser === null) {
            return res.json({serverMessage: 'denied'});
        }
        var dbPost = await Post.findOne({where: {id: Number(body.id)}});
        if(dbPost === null) {
            return res.json({serverMessage: 'denied'}); 
        }
        await dbPost.destroy();
        return res.json({serverMessage: 'success', payload: dbPost});
    }

    async getAll(req, res) {
        var body = req.body;
        var bodyKeys = Object.keys(body);
        if(bodyKeys.length !== 1 || isNaN(Number(body.userId) || NaN)) {
            return res.json({serverMessage: 'denied'});
        }
        var dbUser = await User.findByPk(Number(body.userId));
        if(dbUser === null) {
            return res.json({serverMessage: 'denied'});
        }
        var posts = await Post.findAll({where: {userId: Number(body.userId)}});
        return res.json({serverMessage: 'success', payload: posts});
    }

    async getSome(req, res) {
        
    }

    async change(req, res) {
        var body = req.body;
        var bodyKeys = Object.keys(body);
        if(bodyKeys.length !== 4 || isNaN(Number(body.id) || NaN) || isNaN(Number(body.userId) || NaN) || !body.title || !body.content) {
            return res.json({serverMessage: 'denied'});
        }
        var dbUser = await User.findByPk(Number(body.userId));
        if(dbUser === null) {
            return res.json({serverMessage: 'denied'});
        }
        var dbPost = await Post.findByPk(Number(body.id));
        if(dbPost === null) {
            return res.json({serverMessage: 'denied'});
        }
        dbPost.title = body.title;
        dbPost.content = body.content;
        return res.json({serverMessage: 'success', payload: await dbPost.save()});
    }
}

module.exports = new postsController();
