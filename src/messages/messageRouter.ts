

import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { MessageController } from "./messageController";

//This is just an example second router to show how additional routers can be added
export class MessageRouter extends AppRouter {
    static projController: MessageController = new MessageController();
    constructor() { super(); }

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {

    }
}