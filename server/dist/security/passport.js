"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const config_1 = __importDefault(require("../config/config"));
const user_1 = require("../model/user");
const jwtOptions = {
    jwtFromRequest: passport_jwt_1.default.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config_1.default.secret
};
// Setting up JWT login strategy
const JWTLogin = new passport_jwt_1.default.Strategy(jwtOptions, function (payload, done) {
    const id = new mongoose_1.default.Types.ObjectId(payload._id);
    user_1.User.findById(id, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        }
        else {
            done(null, false);
        }
    });
});
passport_1.default.use(JWTLogin);
exports.requireAuth = passport_1.default.authenticate("jwt", { session: false });
//# sourceMappingURL=passport.js.map