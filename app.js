const express = require('express'); // import express module (simplifies routing/requests, among other things)
const app = express(); // create an instance of the express module (app is the conventional variable name used)
const fetch = require('node-fetch'); // import node-fetch (enables the fetch API to be used server-side)
const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

app.get('/', (req, res) => {
  // Fetch a random cat fact from the Cat Facts API
  fetch('https://catfact.ninja/fact')
    .then(response => response.json()) // Return a promise containing the response in JSON format
    .then(json => res.send(`<h1>Did you know? ${json.fact}</h1>`)) // Extract the 'fact' value from the JSON and send it to the client
    .catch(function(err){ // Catch any errors
      console.log(err); // Log errors to the console
      res.status(500).send('Something went wrong, please try again later.');
    });
});


app.listen(PORT, () => { // start server and listen on specified port
  console.log(`App is running on ${PORT}`) // confirm server is running and log port to the console
}) 
