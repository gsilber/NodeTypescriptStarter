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

}