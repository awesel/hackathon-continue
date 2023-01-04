// import {answer, realPhrase} from '/express/index.js'

const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
//
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('paraphrase-multilingual-mpnet-base-v2','2e08600377ac66a4ad5c542a189b6995ed0d33b5')
//

app.use(express.json());
app.use(express.static("express"));
// default URL for website
////


app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.

  });
  /////////
const server = http.createServer(app);

  

const querystring = require('querystring');

Element.addEventListener("submitter", computeGuess())


function computeGuess() {
  client.semanticSimilarity([answer, realPhrase]).then(function (response) {
    value = response.data})
    score = document.getElementById("score")
    score.textContent = value*100;

}


const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);






