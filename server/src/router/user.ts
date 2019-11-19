import express from "express";
import { UserController } from "../controller/user";
import { requireAuth } from "../security/passport";
import { UserAuthorization } from "../security/user";

export class UserRouter {
    private router: express.Router = express.Router();
    private userController: UserController = new UserController();
    private userAuthorization: UserAuthorization = new UserAuthorization();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {

        this.router.get("/users", requireAuth, this.userController.getUsers);
        this.router.get("/:userId", requireAuth, this.userController.getUserById);
        this.router.put("/:userId", requireAuth, this.userAuthorization.updateUser, this.userController.updateUser);
        this.router.delete("/:userId", requireAuth, this.userAuthorization.updateUser, this.userController.deleteUser);

        this.router.post("/login", this.userController.postLogin);
        this.router.post("/register", this.userController.register);
        return this.router;
    }
}
