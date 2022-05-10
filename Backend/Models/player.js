"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
//const ObjectId = Schema.ObjectId;
var playerModel = new Schema({
    firstname: String,
    lastname: String,
    dob: String,
    position: String,
    salary: String,
    image: String
});
exports["default"] = mongoose_1["default"].model('playerModel', playerModel);
