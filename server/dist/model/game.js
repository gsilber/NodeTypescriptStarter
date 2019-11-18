"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GameSchema = new mongoose_1.default.Schema({
    developer: {
        ref: "User",
        type: mongoose_1.default.Types.ObjectId,
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
        },
        icon: String,
        background: String,
    },
    reviews: [{
            ref: "Comment",
            type: mongoose_1.default.Types.ObjectId
        }],
}, { timestamps: true });
GameSchema.methods.toJSON = function () {
    return {
        title: this.title,
        description: this.description,
        developer: this.developer,
        data: {
            times_played: this.data.times_played,
            icon: this.data.icon,
            background: this.data.background,
            reviews: this.reviews
        },
    };
};
exports.Game = mongoose_1.default.model("Game", GameSchema);
//# sourceMappingURL=game.js.map