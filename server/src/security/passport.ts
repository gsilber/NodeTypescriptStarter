import config from "../config/config";
import passport from "passport";
import mongoose from "mongoose";
import passportJWT from "passport-jwt";
import { User } from "../model/user";

const jwtOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
};

// Setting up JWT login strategy
const JWTLogin = new passportJWT.Strategy(jwtOptions, function (payload, done) {
    let id = new mongoose.Types.ObjectId(payload._id);
    User.findById(id, function (err, user) {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(JWTLogin);
exports.requireAuth = passport.authenticate('jwt', { session: false });       