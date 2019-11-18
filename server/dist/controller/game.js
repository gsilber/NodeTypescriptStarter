"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("../model/game");
class UserController {
    addNewGame(req, res) {
        const newGame = new game_1.Game(req.body);
        console.log(req.body);
        newGame.save((err, game) => {
            if (err) {
                res.send(err);
            }
            res.json(game);
        });
    }
    getGames(req, res) {
        game_1.Game.find({}, (err, game) => {
            if (err) {
                res.send(err);
            }
            res.json(game);
        });
    }
    getGameByTitle(req, res) {
        game_1.Game.findOne({ _id: req.params.title }, req.body, { new: true }, (err, game) => {
            if (err) {
                res.send(err);
            }
            res.json(game);
        });
    }
    updateGame(req, res) {
        game_1.Game.findOneAndUpdate({ _id: req.params.title }, req.body, { new: true }, (err, game) => {
            if (err) {
                res.send(err);
            }
            res.json(game);
        });
    }
    deleteGame(req, res) {
        game_1.Game.remove({ _id: req.params.gameId }, (err) => {
            if (err) {
                res.json({ message: "Unsuccessfully Delete Game!" });
            }
            res.json({ message: "Successfully Deleted Game!" });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=game.js.map