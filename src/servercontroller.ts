import express from "express";

export class ServerController {
    public CreateServer(req: express.Request, res: express.Response): void {
        //TODO: create a entry in the server table
    }
    public JoinServer(req: express.Request, res: express.Response): void {
        //TODO: add a user to a server
    }
    public LeaveServer(req: express.Request, res: express.Response): void {
        //TODO: remove a user to a server
    }
    public RefreshServer(req: express.Request, res: express.Response): void {
        //TODO: return a list of all users and rooms in a server
    }

}