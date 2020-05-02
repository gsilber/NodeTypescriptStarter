import express from "express";
import User from './userModel';
import mongoose = require("mongoose");

    
export class UserController {
    public AuthenticateUser(req: express.Request, res: express.Response): void {
        //TODO: return the auth token if the Account is valid
    }
    public AddFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
        User.findOneAndUpdate({ username: req.body.username }, { friendrequests: req.body.username} );
    }
    public AcceptFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
        User.findOneAndDelete({ friendrequests: req.body.username} );
        User.findOneAndUpdate({ username: req.body.username }, { friends: req.body.username} );
    }
    public RemoveFriend(req: express.Request, res: express.Response): void {
        //TODO: remove an entry in the friends table and ping Accounts to trigger refreshfriends\
        User.findOneAndDelete({ friends: req.body.username} );
    }
    public RefreshFriends(req: express.Request, res: express.Response): void {
        //TODO: return a list of all of a Accounts friends
    }
    public RequestPhotos(req: express.Request, res: express.Response): void {
        //TODO: return photos for the Accounts requested
    }
}