"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
//import multer from 'multer'
var App = (0, express_1["default"])();
mongoose_1["default"].connect('mongodb://127.0.0.1:27017/footballteam', function () {
    console.log("connected to the database");
});
App.use((0, cors_1["default"])());
var port = process.env.PORT || 2000;
App.listen(port, function () {
    console.log("listening at port ".concat(port));
});
