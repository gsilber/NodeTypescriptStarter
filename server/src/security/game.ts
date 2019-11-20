import { Game, GameDocument } from "../model/game";
import { User } from "../model/user";
import { NextFunction, Request, Response } from "express";

// Authorization check
export class GameAuthorization {
    public addNewGame(req: Request, res: Response, next: NextFunction){
        const currentUser = new User(req.user);

        if (currentUser.profile.admin || currentUser.profile.developer){
            return next();
        }

        res.status(401).json({ error: 'Unauthorized.' });
        return next('Unauthorized');
    }

    public updateGame(req: Request, res: Response, next: NextFunction){
        const currentUser = new User(req.user);

        if (currentUser.profile.admin){
            return next();
        }

        Game.findOne({ _id: req.params['gameId']}, (err, game) => {
            if (currentUser.id === game.developer){
                return next();
            }
        })

        res.status(401).json({ error: 'Unauthorized.' });
        return next('Unauthorized');
    }

    public deleteGame(req: Request, res: Response, next: NextFunction){
        const currentUser = new User(req.user);

        if (currentUser.profile.admin){
            return next();
        }

        Game.findOne({ _id: req.params['gameId']}, (err, game) => {
            if (currentUser.id === game.developer){
                return next();
            }
        })

        res.status(401).json({ error: 'Unauthorized.' });
        return next('Unauthorized');
    }
}