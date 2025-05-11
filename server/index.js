require('dotenv').config();
var express = require('express');
var cors = require('cors');
var path = require('path');
var fileUpload = require('express-fileupload');

var sequelize = require('./db');
var models = require('./models/models');
var router = require('./routes/index');
//var errorHandler = require('./middleware/ErrorHandlingMiddleware');

var PORT = process.env.PORT || 5000;

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//app.use(errorHandler);

var start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
