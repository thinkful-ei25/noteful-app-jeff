'use strict';

// Load array of notes
const data = require('./db/notes');

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...
const express = require('express');

// const data = require('./db/notes');

const app = express();

// ADD STATIC SERVER HERE
app.use(express.static('public'));
/////////////////////////

app.get('/api/notes', (req, res) => {
    res.json(data);
  });

app.get('/api/notes/:id', (req, res) =>{
    const id= parseInt(req.params.id, 10);
    res.json(data.find(item => item.id === id));
});

app.listen(8080, function () {
  console.info(`Server listening on 8080`);
}).on('error', err => {
  console.error(err);
});