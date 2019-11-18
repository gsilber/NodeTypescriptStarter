"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CommentSchema = new mongoose_1.default.Schema({
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
    };
};
exports.Game = mongoose_1.default.model("Comment", CommentSchema);
//# sourceMappingURL=comment.js.map