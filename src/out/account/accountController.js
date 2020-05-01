"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accountModel_1 = require("./accountModel");
var mongoose = require("mongoose");
var Account = mongoose.model('Account', accountModel_1.AccountSchema);
var AccountController = /** @class */ (function () {
    function AccountController() {
    }
    /*
    * Adds a new account to the Accounts table
    */
    AccountController.prototype.CreateAccount = function (req, res) {
        var newAccount = new Account(req.body);
        newAccount.save(function (err, account) {
            if (err) {
                res.send(err);
            }
            res.json(account);
        });
    };
    AccountController.prototype.AuthenticateAccount = function (req, res) {
        //TODO: return the auth token if the Account is valid
    };
    AccountController.prototype.AddFriend = function (req, res) {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
    };
    AccountController.prototype.RemoveFriend = function (req, res) {
        //TODO: remove an entry in the friends table and ping Accounts to trigger refreshfriends
    };
    AccountController.prototype.RefreshFriends = function (req, res) {
        //TODO: return a list of all of a Accounts friends
    };
    AccountController.prototype.RequestPhotos = function (req, res) {
        //TODO: return photos for the Accounts requested
    };
    AccountController.prototype.SendFriendChat = function (req, res) {
        //TODO: add a message to the PersonalMessage table and ping Accounts to trigger refreshfriendchat
    };
    AccountController.prototype.RefreshFriendChat = function (req, res) {
        //TODO: return list of of every message after the last one.
    };
    return AccountController;
}());
exports.AccountController = AccountController;
//# sourceMappingURL=accountController.js.map