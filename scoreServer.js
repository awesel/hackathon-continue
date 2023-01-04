const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Check if the request method is POST and the Content-Type is JSON
  if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {

    const variable1 = req.body.answeer;
  const variable2 = req.body.realPhrasee;
  client.semanticSimilarity([variable1, variable2]).then(function (response) {
    value = response.data})

      // Send a JSON response
      res.end(JSON.stringify({ score: value }));
  }
   else {
    // If the request is not a POST with a JSON Content-Type, send a 400 Bad Request response
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Bad request' }));
  }
});

// Start the server on port 8000
server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
