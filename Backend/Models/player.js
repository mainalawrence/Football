"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
//const ObjectId = Schema.ObjectId;
const playerModel = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    dob: Date,
    position: String,
    salary: String,
    image: { type: Buffer, data: Buffer, contentType: String }
});
exports.default = mongoose_1.default.model('playerModel', playerModel);
