import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "./securityMiddleware";
import { UserController } from "./userController";

//This is just an example second router to show how additional routers can be added
export class UserRouter extends AppRouter{
    static userController: UserController=new UserController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.router.post("/user/addfriend", [SecurityMiddleware.RequireAuth], UserRouter.userController.AddFriend);
        this.router.delete("/user/removefriend", [SecurityMiddleware.RequireAuth], UserRouter.userController.RemoveFriend);
        this.router.get("/user/refreshfriends", [SecurityMiddleware.RequireAuth], UserRouter.userController.RefreshFriends);
        this.router.get("/user/requestphotos", [SecurityMiddleware.RequireAuth], UserRouter.userController.RequestPhotos);
    }    
}