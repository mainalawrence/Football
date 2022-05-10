"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var Routers_1 = __importDefault(require("./Router/Routers"));
//connect to db
mongoose_1["default"].connect('mongodb://127.0.0.1:27017/footballteam');
var db = mongoose_1["default"].connection;
db.on('error', function (error) { return console.error("db error" + error); });
db.once('open', function () { return console.log("db connectd"); });
//import multer from 'multer'
var App = (0, express_1["default"])();
App.use((0, cors_1["default"])());
App.use(express_1["default"].json());
//routs
App.use("/", Routers_1["default"]);
var port = process.env.PORT || 2000;
App.listen(port, function () {
    console.log("listening at port ".concat(port));
});
