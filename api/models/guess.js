const mongoose = require("mongoose")

const GuessSchema = new mongoose.Schema(
    {
        guess:{
            type: String
        },
        imageText: {
            type: String,
            require: true
        }
    }
);

module.exports = mongoose.model("guess", GuessSchema);