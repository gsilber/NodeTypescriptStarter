import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const AccountSchema = new Schema({
    username: {
        type: String,
        required: 'Username is required'
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
    }
});