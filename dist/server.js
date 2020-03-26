"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
exports.router = express.Router();
require('dotenv').config();
var app = express();
app.use(require('./routes/url/user_onboard'));
app.listen(process.env.PORT || 5000, function () {
    console.log("Server running on port " + process.env.PORT + "...!!!");
});
module.exports = app;
//# sourceMappingURL=server.js.map