"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const user_1 = require("../model/user");
class UserController {
    authorize(req, res, next) {
        return res.status(200).json({
            validated: true
        });
    }
    // ========================================
    // Login Route
    // ========================================
    postLogin(req, res, next) {
        user_1.User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                return res.status(400).json({ error: "bad data" });
            }
            if (!user) {
                return res.status(400).json({ error: "Your login details could not be verified. Please try again." });
            }
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (err) {
                    return res.status(400).json({ error: "bad data" });
                }
                if (!isMatch) {
                    return res.status(400).json({ error: "Your login details could not be verified. Please try again." });
                }
                const userInfo = user.toJSON();
                res.status(200).json({
                    token: "Bearer " + jsonwebtoken_1.default.sign(userInfo, config_1.default.secret, { expiresIn: 10080 }),
                    user: userInfo
                });
            });
        });
    }
    // ========================================
    // Registration Route
    // ========================================
    register(req, res, next) {
        // Check for registration errors
        const email = req.body.email;
        const password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const status = req.body.status;
        if (!email) {
            return res.status(422).send({ error: "You must enter an email address." });
        }
        if (!firstName || !lastName) {
            return res.status(422).send({ error: "You must enter your full name." });
        }
        if (!password) {
            return res.status(422).send({ error: "You must enter a password." });
        }
        if (!status) {
            return res.status(422).send({ error: "You must enter a status." });
        }
        user_1.User.findOne({ email }, function (err, existingUser) {
            if (err) {
                return next(err);
            }
            if (existingUser) {
                return res.status(422).send({ error: "This email address is already registered." });
            }
            else {
                const user = new user_1.User({
                    admin: false,
                    developer: false,
                    email,
                    game: [{}],
                    password,
                    status,
                    profile: { firstName, lastName }
                });
                user.save(function (err, user) {
                    if (err) {
                        return next(err);
                    }
                    const userInfo = user.toJSON();
                    res.status(201).json({
                        token: "Bearer " + jsonwebtoken_1.default.sign(userInfo, config_1.default.secret, { expiresIn: 10080 }),
                        user: userInfo
                    });
                });
            }
        });
    }
    getUsers(req, res) {
        user_1.User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    getUserById(req, res) {
        user_1.User.findById({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    updateUser(req, res) {
        user_1.User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    deleteUser(req, res) {
        user_1.User.remove({ _id: req.params.userId }, (err) => {
            if (err) {
                res.json({ message: "Unsuccessfully Delete User!" });
            }
            res.json({ message: "Successfully Deleted User!" });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map