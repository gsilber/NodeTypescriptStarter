import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { GameDocument } from "./game";

export type UserDocument = mongoose.Document & {
    admin: boolean;
    password: string;

    profile: {
        email: string,
        developer: boolean,
        firstName: string,
        lastName: string,
        games?: [GameDocument["_id"]]
    };

    resetPasswordExpires: string;
    resetPasswordToken: string;

    comparePassword: comparePasswordFunction;
};

const UserSchema = new mongoose.Schema({
    admin: {
        required: true,
        type: Boolean
    },
    password: {
        required: true,
        type: String
    },
    profile: {
        developer: {
            required: true,
            type: Boolean
        },
        email: {
            lowercase: true,
            required: true,
            type: String,
            unique: true
        },
        firstName: {
            required: true,
            type: String
        },
        lastName: {
            required: true,
            type: String
        },
        games: [{
            ref: "Game",
            type: mongoose.Types.ObjectId
        }],
    },
    resetPasswordExpires: { type: Date },
    resetPasswordToken: { type: String },

}, { timestamps: true });

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

UserSchema.pre("save", function save(next) {
    const user = this as UserDocument;
    if (!user.isModified("password")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, (err: mongoose.Error, hash) => {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

const comparePassword: comparePasswordFunction = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch);
    });
};

UserSchema.methods.comparePassword = comparePassword;

UserSchema.methods.toJSON = function() {
    return {
        _id: this._id,
        profile: {
            email: this.email,
            developer: this.developer,
            firstName: this.profile.firstName,
            lastName: this.profile.lastName,
            games: this.profile.games
        },
    };
};

export const User = mongoose.model<UserDocument>("User", UserSchema);
