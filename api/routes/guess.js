const router = require("express").Router();
const Guess = require("../models/guess");

router.post("/", async (req, res) => {
    const newGuess = new Guess (req.body);
    try{
        const savedGuess = await newGuess.save();
        res.status(200).json(savedGuess);
    } catch (err)
    {
        res.status(500).json(err);
    }
})


router.get(":/id", async (req, res) => {
    try {
        const guessObj = await Guess.findById(req.params.id);
        var text1 = guessbj.guess;
        const text2 = guessObj.imageText;
        const NLPCloudClient = require('nlpcloud');
        const client = new NLPCloudClient();
        client.semanticSimilarity([text1, text2]).then(function (response) {
            var john = response.data
            res.status(200).json(john);
        })
}catch(err) {
    res.status(500).json(err);
}
})


module.exports = router;