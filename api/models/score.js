const mongoose = require("mongoose")

const ScoreSchema = new mongoose.Schema(
    {
        score:{
            type: double
        }
    }
);

module.exports = mongoose.model("Score", ScoreSchema);