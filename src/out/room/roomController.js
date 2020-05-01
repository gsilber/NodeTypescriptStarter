"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomController = /** @class */ (function () {
    function RoomController() {
    }
    RoomController.prototype.CreateRoom = function (req, res) {
        //TODO: add an entry to the rooms table 
    };
    RoomController.prototype.SendRoomChat = function (req, res) {
        //TODO: add a message to the RoomMessage table and ping users to trigger refreshroomchat
    };
    RoomController.prototype.RefreshRoomChat = function (req, res) {
        //TODO: return list of of every message after the last one.
    };
    RoomController.prototype.JoinRoomVoice = function (req, res) {
        //TODO: return list of who is in the voice room and trigger peers to connect to you
    };
    RoomController.prototype.RefreshRoomVoice = function (req, res) {
        //TODO: return list of of everyone in the voice room
    };
    RoomController.prototype.JoinRoomVideo = function (req, res) {
        //TODO: return list of who is in the video room and trigger peers to connect to you
    };
    RoomController.prototype.RefreshRoomVideo = function (req, res) {
        //TODO: return list of of everyone in the video room
    };
    return RoomController;
}());
exports.RoomController = RoomController;
//# sourceMappingURL=roomController.js.map