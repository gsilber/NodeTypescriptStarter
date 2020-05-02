import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export interface IMessage extends mongoose.Document {
    userTo: string;
    userFrom:string;
    time: Date;
    content: String;
}  

const MessageSchema: mongoose.Schema = new Schema({
    
    messages: [{
        userTo : {
            type: String,
            required: "userTo is required"
        },
        userFrom : {
            type: String,
            required: "userTo is required"
        },
        time : {
            type: Date,
            required : "Date is required"
        },
        content: {
            type: String,
            required : "Content is required"
        }
    }]    
});

export default mongoose.model<IMessage>("Message",MessageSchema);