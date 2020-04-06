import express from "express";

export class AccountController {
    public CreateUser(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the users table
    }
    public AuthenticateUser(req: express.Request, res: express.Response): void {
        //TODO: return the auth token if the user is valid
    }
    public AddFriend(req: express.Request, res: express.Response): void {
        //TODO: add an entry in the friends table and ping users to trigger refreshfriends
    }
    public RemoveFriend(req: express.Request, res: express.Response): void {
        //TODO: remove an entry in the friends table and ping users to trigger refreshfriends
    }
    public RefreshFriends(req: express.Request, res: express.Response): void {
        //TODO: return a list of all of a users friends
    }
    public RequestPhotos(req: express.Request, res: express.Response): void {
        //TODO: return photos for the users requested
    }

    public SendFriendChat(req: express.Request, res: express.Response): void {
        //TODO: add a message to the PersonalMessage table and ping users to trigger refreshfriendchat
    }
    public RefreshFriendChat(req: express.Request, res: express.Response): void {
        //TODO: return list of of every message after the last one.

    }

}