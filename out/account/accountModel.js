"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.AccountSchema = new Schema({
    friends: [{
            username: {
                type: String
            },
            requeststate: {
                type: String,
                enum: ['REQUESTED', 'RECIEVED', 'ACCEPTED']
            },
            messages: [{
                    userTo: {
                        type: String,
                        required: "userTo is required"
                    },
                    time: {
                        type: Date,
                        required: "Date is required"
                    },
                    content: {
                        type: String,
                        required: "Content is required"
                    }
                }]
        }]
});
//# sourceMappingURL=accountModel.js.map