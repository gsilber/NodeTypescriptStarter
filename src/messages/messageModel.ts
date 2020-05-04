import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export interface IMessage extends mongoose.Document {
    userTo: string;
    userFrom: string;
    time: Date;
    content: String;
    friends: mongoose.Types.Array<string>;
    friendrequests: mongoose.Types.Array<string>;
}

export interface Friend {
    username: string;
    messages: Message;
}

export interface Message {
    userTo: string;
    userFrom: string;
    time: Date;
    content: string;
}

const MessageSchema: mongoose.Schema = new Schema({
    friendrequests: [{
        username: {
            type: String,
            required: "username is required"
        }
    }],
    friends: [{
        username: {
            type: String,
            required: "username is required"
        },
        messages: [{
            userTo: {
                type: String,
                required: "userTo is required"
            },
            userFrom: {
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

export default mongoose.model<IMessage>("Message", MessageSchema);