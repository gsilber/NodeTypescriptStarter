import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { RoomController } from "./roomController";

//This is just an example second router to show how additional routers can be added
export class RoomRouter extends AppRouter{
    static roomController: RoomController=new RoomController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.router.post("/room/create", [SecurityMiddleware.RequireAuth],RoomRouter.roomController.CreateRoom);
        this.router.post("/room/sendchat", [SecurityMiddleware.RequireAuth],RoomRouter.roomController.SendRoomChat);
        this.router.get("/room/refreshchat", [SecurityMiddleware.RequireAuth],RoomRouter.roomController.RefreshRoomChat);
        this.router.post("/room/joinvoice", [SecurityMiddleware.RequireAuth],RoomRouter.roomController.JoinRoomVoice);
        this.router.get("/room/refreshvoice", [SecurityMiddleware.RequireAuth],RoomRouter.roomController.RefreshRoomVoice);
        this.router.post("/room/joinvideo", [SecurityMiddleware.RequireAuth],RoomRouter.roomController.JoinRoomVideo);
        this.router.get("/room/refreshvideo", [SecurityMiddleware.RequireAuth],RoomRouter.roomController.RefreshRoomVideo);
    }    
}