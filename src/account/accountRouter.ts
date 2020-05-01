import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { AccountController } from "./accountController";

//This is just an example second router to show how additional routers can be added
export class AcccountRouter extends AppRouter{
    static accountController: AccountController=new AccountController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.router.post("/account/addfriend", [SecurityMiddleware.RequireAuth], AcccountRouter.accountController.AddFriend);
        this.router.delete("/account/removefriend", [SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RemoveFriend);
        this.router.get("/account/refreshfriends", [SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RefreshFriends);
        this.router.get("/account/requestphotos", [SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RequestPhotos);
        this.router.post("/account/sendchat", [SecurityMiddleware.RequireAuth], AcccountRouter.accountController.SendFriendChat);
        this.router.get("/account/refreshchat", [SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RefreshFriendChat);
    }    
}