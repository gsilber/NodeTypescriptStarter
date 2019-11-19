import mongoose from "mongoose";
import { Url } from "url";
import { CommentDocument } from "./comment";
import { UserDocument } from "./user";

export type GameDocument = mongoose.Document & {
    developer: UserDocument["_id"];
    title: string;
    description: string;

    data: {
        times_played: number;
        icon: Url;
        background: Url;
    }

    reviews?: [CommentDocument["_id"]];
};

const GameSchema = new mongoose.Schema({
    developer: {
        ref: "User",
        type: mongoose.Types.ObjectId,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    data: {
        times_played: {
            default: 0,
            type: Number,
            required: true
        },
        icon: String,
        background: String,
        required: true
    },

    reviews: [{
        ref: "Comment",
        type: mongoose.Types.ObjectId
    }],

}, { timestamps: true });

GameSchema.methods.toJSON = function() {
    return {
        title: this.title,
        description: this.description,
        developer: this.developer,
        data: {
            times_played: this.data.times_played,
            icon: this.data.icon,
            background: this.data.background
        },
        reviews: this.reviews
    };
};

export const Game = mongoose.model<GameDocument>("Game", GameSchema);
