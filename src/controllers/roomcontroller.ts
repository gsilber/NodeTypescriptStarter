import express from "express";

export class RoomController {
    public CreateRoom(req: express.Request, res: express.Response): void {
        //TODO: add an entry to the rooms table 
    }

    public SendRoomChat(req: express.Request, res: express.Response): void {
        //TODO: add a message to the RoomMessage table and ping users to trigger refreshroomchat
    }
    public RefreshRoomChat(req: express.Request, res: express.Response): void {
        //TODO: return list of of every message after the last one.
    }
    public JoinRoomVoice(req: express.Request, res: express.Response): void {
        //TODO: return list of who is in the voice room and trigger peers to connect to you
    }
    public RefreshRoomVoice(req: express.Request, res: express.Response): void {
        //TODO: return list of of everyone in the voice room
    }
    public JoinRoomVideo(req: express.Request, res: express.Response): void {
        //TODO: return list of who is in the video room and trigger peers to connect to you
    }
    public RefreshRoomVideo(req: express.Request, res: express.Response): void {
        //TODO: return list of of everyone in the video room
    }


}