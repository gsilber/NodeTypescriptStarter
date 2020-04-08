import express from "express";
import {ServerController} from "./servercontroller";
import {RoomController} from "./roomcontroller";
import {AccountController} from "./accountcontroller";


export class ApiRouter {
    private router: express.Router = express.Router();
    private servercontroller: ServerController = new ServerController();
    private roomcontroller: RoomController = new RoomController();
    private accountcontroller: AccountController = new AccountController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        //Handle account controller methods
        this.router.post("/account", this.accountcontroller.CreateUser);
        this.router.get("/account/authenticate", this.accountcontroller.AuthenticateUser);
        this.router.post("/account/addfriend", this.accountcontroller.AddFriend);
        this.router.delete("/account/removefriend", this.accountcontroller.RemoveFriend);
        this.router.get("/account/refreshfriends", this.accountcontroller.RefreshFriends);
        this.router.get("/account/requestphotos", this.accountcontroller.RequestPhotos);
        this.router.post("/account/sendchat", this.accountcontroller.SendFriendChat);
        this.router.get("/account/refreshchat", this.accountcontroller.RefreshFriendChat);

        //Handle server controller methods
        this.router.post("/server/create", this.servercontroller.CreateServer);
        this.router.post("/server/join", this.servercontroller.JoinServer);
        this.router.delete("/server/leave", this.servercontroller.LeaveServer);
        this.router.get("/server/refresh", this.servercontroller.RefreshServer);
        
        //Handle room controller methods
        this.router.post("/room/create", this.roomcontroller.CreateRoom);
        this.router.post("/room/sendchat", this.roomcontroller.SendRoomChat);
        this.router.get("/room/refreshchat", this.roomcontroller.RefreshRoomChat);
        this.router.post("/room/joinvoice", this.roomcontroller.JoinRoomVoice);
        this.router.get("/room/refreshvoice", this.roomcontroller.RefreshRoomVoice);
        this.router.post("/room/joinvideo", this.roomcontroller.JoinRoomVideo);
        this.router.get("/room/refreshvideo", this.roomcontroller.RefreshRoomVideo);

        return this.router;
    }
}
