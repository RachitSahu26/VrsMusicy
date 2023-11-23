const mongoose = require("mongoose");

const playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true,
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song', // Assuming you have a Song model
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
    }],
    // Add more fields as needed for your specific use case
});

const PlaylistModel = mongoose.model("Playlist", playlist);

module.exports = PlaylistModel;