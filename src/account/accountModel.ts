import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const AccountSchema = new Schema({
    friends: [{
        username: {
            type: String
        },
        requeststate: {
            type: String,
            enum: ['REQUESTED','RECIEVED','ACCEPTED']
        },
        messages: [{
            userTo : {
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
    }]
    
});