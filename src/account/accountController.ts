import express from "express";
import { AccountSchema } from './accountModel';
import mongoose = require("mongoose");

const Account = mongoose.model('Account', AccountSchema);

export class AccountController {
    /*
    * Adds a new account to the Accounts table
    */
    public CreateAccount(req: express.Request, res: express.Response): void {
        let newAccount = new Account(req.body);
        newAccount.save((err, account) => {
            if(err){
                res.send(err);
            }    
            res.json(account);
        });
    }
    public AuthenticateAccount(req: express.Request, res: express.Response): void {
        //TODO: return the auth token if the Account is valid
    }
    public AddFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping Accounts to trigger refreshfriends
    }
    public RemoveFriend(req: express.Request, res: express.Response): void {
        //TODO: remove an entry in the friends table and ping Accounts to trigger refreshfriends
    }
    public RefreshFriends(req: express.Request, res: express.Response): void {
        //TODO: return a list of all of a Accounts friends
    }
    public RequestPhotos(req: express.Request, res: express.Response): void {
        //TODO: return photos for the Accounts requested
    }
    public SendFriendChat(req: express.Request, res: express.Response): void {
        //TODO: add a message to the PersonalMessage table and ping Accounts to trigger refreshfriendchat
    }
    public RefreshFriendChat(req: express.Request, res: express.Response): void {
        //TODO: return list of of every message after the last one.
    }

}