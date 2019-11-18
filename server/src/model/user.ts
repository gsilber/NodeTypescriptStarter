import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { GameDocument } from './game';

export type UserDocument = mongoose.Document & {
    admin: Boolean;
    developer: Boolean;
    email: string;
    games?: [GameDocument['_id']];
    password: String;

    profile: {
        firstName: String,
        lastName: String
    };

    resetPasswordExpires: string;
    resetPasswordToken: string;

    status: string

    comparePassword: comparePasswordFunction;
};

const UserSchema = new mongoose.Schema({
    admin: { type: Boolean },
    developer: { type: Boolean },
    email: {
        lowercase: true,
        required: true,
        type: String,
        unique: true
    },
    games: [{
        ref: 'Game',
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
        }
    },
    resetPasswordExpires: { type: Date },
    resetPasswordToken: { type: String },
    status: { type: String }

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

const comparePassword: comparePasswordFunction = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch);
    });
};

UserSchema.methods.comparePassword = comparePassword;

UserSchema.methods.toJSON = function () {
    return {
        _id: this._id,
        firstName: this.profile.firstName,
        lastName: this.profile.lastName,
        email: this.email,
        status: this.status,
        developer: this.developer
    }
}

export const User = mongoose.model<UserDocument>("User", UserSchema);