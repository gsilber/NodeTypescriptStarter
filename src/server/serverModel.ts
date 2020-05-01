import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const ServerSchema = new Schema({
    Name: {
        type: String,
    },
    Rooms: [{
        Id: {
            type: mongoose.Types.ObjectId
        }
    }],
    Users: [{
        username: {
            type: String
        }
    }]
});