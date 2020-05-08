import express from "express";
import { Config } from '../config';
import User from '../security/userModel';
import Message from './messageModel';
import mongoose = require("mongoose");


export class MessageController {

    public SendFriendChat(req: express.Request, res: express.Response): void {
        //TODO: add a message to the PersonalMessage table and ping Accounts to trigger refreshfriendchat
        const userId = req.query.userId;
        Message.findOne({ _id: userId }, function (err, messageDoc) {
            if (err || messageDoc == null) {
                return res.sendStatus(500).end();
            }
            var message = new Message({ time: Date.now , content: req.body.content});
            message.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'message sent', status: 'success' });
                }
            });
        });
    }
    public RefreshFriendChat(req: express.Request, res: express.Response): void {
        //TODO: return list of of every message after the last one.
    }
    public AddFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
        const userId = req.query.userId;
        User.findOneAndUpdate({ _id: userId }, {$push: { friendrequests: {username: req.body.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend request sent', status: 'success' });
                }
            });
        });
        User.findOneAndUpdate({ username: req.body.username}, {$push: { friendrequests: {username: req.query.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend request sent', status: 'success' });
                }
            });
        });
    }
    public DeclineFriend(req: express.Request, res: express.Response): void {
        const userId = req.query.userId;
        User.findOneAndUpdate({ _id: userId }, {$pull: { friendrequests: {username: req.body.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend request removed', status: 'success' });
                }
            });
        }); 
        User.findOneAndUpdate({ username: req.body.username}, {$pull: { friendrequests: {username: req.query.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend request removed', status: 'success' });
                }
            });
        });
    }
    public AcceptFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
        const userId = req.query.userId;
        User.findOneAndUpdate({ _id: userId }, {$pull: { friendrequests: {username: req.body.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend request removed', status: 'success' });
                }
            });
        });       
        User.findOneAndUpdate({ _id: userId }, {$push: { friends: {username: req.body.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend added', status: 'success' });
                }
            });
        });
        User.findOneAndUpdate({ username: req.body.username}, {$pull: { friendrequests: {username: req.query.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend request removed', status: 'success' });
                }
            });
        });
        User.findOneAndUpdate({username: req.body.username }, {$push: { friends: {username: req.query.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend added', status: 'success' });
                }
            });
        });
    }
    public RemoveFriend(req: express.Request, res: express.Response): void {
        //TODO: remove an entry in the friends table and ping Accounts to trigger refreshfriends
        const userId = req.query.userId;
        User.findOneAndUpdate({ _id: userId }, {$push: { friends: {username: req.body.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend removed', status: 'success' });
                }
            });
        });
        User.findOneAndUpdate({username: req.body.username }, {$push: { friends: {username: req.query.username}}}, function (err, user) {
            if (err || user == null) {
                return res.sendStatus(500).end();
            }
            user.save(function (err) {
                if (err) {
                    return res.sendStatus(500).end();
                }
                else {
                    return res.send({ fn: 'friend removed', status: 'success' });
                }
            });
        });
    }
    public RefreshFriends(req: express.Request, res: express.Response): void {
        //TODO: return a list of all of a Accounts friends
    }
    public RequestPhotos(req: express.Request, res: express.Response): void {
        //TODO: return photos for the Accounts requested
    }

}