import express from "express";
import { Config } from '../config';
import User from '../security/userModel';
import Message from './messageModel';
import mongoose = require("mongoose");


export class MessageController {

    public SendFriendChat(req: express.Request, res: express.Response): void {
        //TODO: add a message to the PersonalMessage table and ping Accounts to trigger refreshfriendchat
    }
    public RefreshFriendChat(req: express.Request, res: express.Response): void {
        //TODO: return list of of every message after the last one.
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