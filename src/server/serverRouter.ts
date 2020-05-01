import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { ServerController } from "./serverController";

//This is just an example second router to show how additional routers can be added
export class serverRouter extends AppRouter{
    static ServerController: ServerController=new ServerController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.router.post("/server/create", [SecurityMiddleware.RequireAuth],serverRouter.ServerController.CreateServer);
        this.router.post("/server/join", [SecurityMiddleware.RequireAuth],serverRouter.ServerController.JoinServer);
        this.router.delete("/server/leave", [SecurityMiddleware.RequireAuth],serverRouter.ServerController.LeaveServer);
        this.router.get("/server/refresh", [SecurityMiddleware.RequireAuth],serverRouter.ServerController.RefreshServer);
    }    
}