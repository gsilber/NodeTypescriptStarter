import mongoose from "mongoose";


export type CommentDocument = mongoose.Document & {
    title: string;
    body: string;
    rating: number;
};

const CommentSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },

    body: {
        required: true,
        type: String
    },

    rating: {
        required: true,
        type: Number
    }

}, { timestamps: true });

CommentSchema.methods.toJson = function () {
    return {
      title: this.title,
      body: this.body,
      rating: this.rating
    }
  }

  export const Game = mongoose.model<CommentDocument>("Comment", CommentSchema);
