import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const ServerSchema = new Schema({
    Id: {
        type: Number,
        required: 'Username is required'
    },
    Name: {
        type: String,
        required: 'Email is required'            
    },
    Rooms: [{
        Id: {
            type: Number
        }
    }],
    Users: [{
        username: {
            type: String
        }
    }]
});