import express from "express";
import { ServerSchema } from '../models/Servers';
import mongoose = require("mongoose");
const Server = mongoose.model('Server', ServerSchema);

export class ServerController {
    public CreateServer(req: express.Request, res: express.Response): void {
        //TODO: create a entry in the server table
        let newServer = new Server(req.body);
        newServer.save((err, server) => {
            if(err){
                res.send(err);
            }    
            res.json(server);
        });
    }
    public JoinServer(req: express.Request, res: express.Response): void {
        //TODO: add a user to a server
        // .update({ _id: 1 },{ $push: { users: req } }) 
    }
    public LeaveServer(req: express.Request, res: express.Response): void {
        //TODO: remove a user to a server
        // .update({ _id: 1 },{ $pull: { users: req } }) 
    }
    public RefreshServer(req: express.Request, res: express.Response): void {
        //TODO: return a list of all users and rooms in a server
    }
}