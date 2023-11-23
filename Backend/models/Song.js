const mongoose = require("mongoose")
const song = new mongoose.Schema({
    songName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    }, email: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
    },


})

const SongModel= mongoose.model("song",song)
module.exports=UserModel;