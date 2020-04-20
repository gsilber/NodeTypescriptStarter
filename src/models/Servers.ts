import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const ServerSchema = new Schema({
    Id: {
        type: Number,
    },
    Name: {
        type: String,
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