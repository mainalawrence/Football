"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var App = (0, express_1["default"])();
await mongoose_1["default"].connect('mongodb://localhost/my_database', function () {
    console.log("connected to the database");
});
var port = process.env.PORT || 2000;
App.listen(port, function () {
    console.log("listening at port ".concat(port));
});
