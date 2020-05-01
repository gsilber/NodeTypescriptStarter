"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverModel_1 = require("./serverModel");
var mongoose = require("mongoose");
var Server = mongoose.model('Server', serverModel_1.ServerSchema);
var ServerController = /** @class */ (function () {
    function ServerController() {
    }
    ServerController.prototype.CreateServer = function (req, res) {
        //TODO: create a entry in the server table
        var newServer = new Server(req.body);
        newServer.save(function (err, server) {
            if (err) {
                res.send(err);
            }
            res.json(server);
        });
    };
    ServerController.prototype.JoinServer = function (req, res) {
        //TODO: add a user to a server
        // .update({ _id: 1 },{ $push: { users: req } }) 
    };
    ServerController.prototype.LeaveServer = function (req, res) {
        //TODO: remove a user to a server
        // .update({ _id: 1 },{ $pull: { users: req } }) 
    };
    ServerController.prototype.RefreshServer = function (req, res) {
        //TODO: return a list of all users and rooms in a server
    };
    return ServerController;
}());
exports.ServerController = ServerController;
//# sourceMappingURL=serverController.js.map