"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../../server");
server_1.router.get('/', function (req, res) {
    res.status(200).send({ 'msg': 'Server is working.......!!!!' });
});
module.exports = server_1.router;
//# sourceMappingURL=user_onboard.js.map