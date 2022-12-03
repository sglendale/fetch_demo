const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 56789;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.options('/register', cors());

app.options('/login', cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/json', (req, res) => {
    var readStream = fs.readFileSync('./private/sample.json');
    res.send(readStream);
});

// Aquib, see the example pushed on the master branch for usage.

app.get('/notes', (req, res) => {
  /* Access the body of your request here, Aquib. */
});

app.post('/new-note', (req, res) =>{
  /* For posting your new single first and responding to yourself with "ok" */
});

app.post('/register', cors(), (req, res) => { 
  res.send();
});

app.post('/login', cors(), (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
