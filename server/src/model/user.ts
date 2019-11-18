import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { GameDocument } from "./game";

export type UserDocument = mongoose.Document & {
    admin: boolean;
    developer: boolean;
    email: string;
    games?: [GameDocument["_id"]];
    password: string;

    profile: {
        firstName: string,
        lastName: string,
        status: string
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
    games: [{
        ref: "Game",
        type: mongoose.Types.ObjectId
    }],
    password: {
        required: true,
        type: String
    },
    profile: {
        firstName: {
            required: true,
            type: String
        },
        lastName: {
            required: true,
            type: String
        },
        status: {
            type: String
        }
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
            firstName: this.profile.firstName,
            lastName: this.profile.lastName,
            status: this.status
        },
        email: this.email,
        developer: this.developer
    };
};

export const User = mongoose.model<UserDocument>("User", UserSchema);
