import mongoose from "mongoose";
import { UserDocument } from "./user";
import { CommentDocument } from "./comment";
import { Url } from "url";


export type GameDocument = mongoose.Document & {
    developer: UserDocument['_id'];
    title: string;
    description: string;
    
    data:{
        times_played: number;
        icon: Url;
        background: Url;
    }

    reviews: [CommentDocument['_id']];
};

const GameSchema = new mongoose.Schema({
    developer: {
        ref: 'User',
        type: mongoose.Types.ObjectId
    },

    title: String,
    description: String,

    data:{
        times_played: {
            default: 0,
            type: Number,
        },
        icon: String,
        background: String,
    },

    reviews: [{
        ref: 'Comment',
        type: mongoose.Types.ObjectId
    }],

}, { timestamps: true });

GameSchema.methods.toJson = function () {
    return {
      title: this.title,
      description: this.description,
      developer: this.developer,
      times_played: this.data.times_played,
      icon: this.data.icon,
      background: this.data.background,
      reviews: this.reviews,
    }
  }

  export const Game = mongoose.model<GameDocument>("Game", GameSchema);
