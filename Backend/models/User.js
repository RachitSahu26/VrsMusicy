const mongoose = require("mongoose")
const user = new mongoose.Schema({
    firstName: {
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

const UserModel= mongoose.model("User",user)
module.exports=UserModel;