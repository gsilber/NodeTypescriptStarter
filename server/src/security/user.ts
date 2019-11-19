import { User, UserDocument } from "../model/user";
import { NextFunction, Request, Response } from "express";

// Authorization check
export class UserAuthorization {
    public updateUser(req: Request, res: Response, next: NextFunction){
        if (!req.user) {
            res.status(401).json({ error: 'Not login.' });
            return next('Not Login');
        }
        const currentUser = new User(req.user);
    
        if (currentUser.profile.admin){
            return next();
        }
    
        if (currentUser.id === req.params['userId']){
            return next();
        }
    
        res.status(401).json({ error: 'Unauthorized.' });
        return next('Unauthorized');
    }

    public deleteUser(req: Request, res: Response, next: NextFunction){
        if (!req.user) {
            res.status(401).json({ error: 'Not login.' });
            return next('Not Login');
        }

        const currentUser = new User(req.user);
    
        if (currentUser.profile.admin){
            return next();
        }

        res.status(401).json({ error: 'Unauthorized.' });
        return next('Unauthorized');
    }
}