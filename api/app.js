const express = require("express");
const env = require("dotenv");
const { default: mongoose } = require("mongoose");

const app = express(); 

dotenv.config();


app.use(express.json());

app.use("/api/score", scoreRoute); //Most likely change from api to just route 
app.listen(5000, () => {
    console.log("Backend up!");
})