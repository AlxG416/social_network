var { DataTypes } = require("sequelize");

var sequelize = require("../db");

var User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    profilePicture: {type: DataTypes.STRING, defaultValue: ""}
});

var Post = sequelize.define("post", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, defaultValue: ""},
    content: {type: DataTypes.STRING, defaultValue: ""}
});

// var Friendship = sequelize.define("friendship", {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     userId1: {type: DataTypes.INTEGER},
//     userId2: {type: DataTypes.INTEGER}
// });

var Message = sequelize.define("message", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    senderId: {type: DataTypes.INTEGER},
    receiverId: {type: DataTypes.INTEGER},
    content: {type: DataTypes.STRING, defaultValue: ""}
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
    User,
    Post,
//    Friendship,
    Message
};
