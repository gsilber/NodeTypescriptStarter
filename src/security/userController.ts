import express from "express";
import User from './userModel';
import mongoose = require("mongoose");

    
export class UserController {
    public AuthenticateUser(req: express.Request, res: express.Response): void {
        //TODO: return the auth token if the Account is valid
    }
    public AddFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
        const userId = req.query.userId;
        User.findOneAndUpdate({ _id: userId }, {$push: { friendrequests: req.body.username}} );
    }
    public AcceptFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
        const userId = req.query.userId;
        User.findOneAndDelete({$pull: { friendrequests: req.body.username}} );
        User.findOneAndUpdate({ _id: userId }, {$push:{ friends: req.body.username}} );
    }
    public RemoveFriend(req: express.Request, res: express.Response): void {
        //TODO: remove an entry in the friends table and ping Accounts to trigger refreshfriends\
        User.findOneAndDelete({$pull: { friends: req.body.username}} );
    }
    public RefreshFriends(req: express.Request, res: express.Response): void {
        //TODO: return a list of all of a Accounts friends
    }
    public RequestPhotos(req: express.Request, res: express.Response): void {
        //TODO: return photos for the Accounts requested
    }
}