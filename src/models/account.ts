import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const AccountSchema = new Schema({
    username: {
        type: String,
        required: 'Username is required'
    },
    nickname: {
        type: String,
        required: 'Nickname is required'
    },
    email: {
        type: String,
        required: 'Email is required'            
    },
    password: {
        type: String,
        required: 'Password is required' 
    },
    photo: {
        type: Buffer
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    friends: [{
        username: {
            type: String
        },
        requeststate: {
            type: String,
            enum: ['REQUESTED','SENT','ACCEPTED']
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