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

app.post('/register', (req, res) => {
    var readStream = fs.readFileSync('./private/succesful_registration.json');
    res.status(200);
    res.send(readStream);
});

app.post('/login', cors(), (req, res) => {
  var readStream = fs.readFileSync('./private/successful_login.json');
  res.status(200);
  res.send(readStream);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use((req, res, next)=>{
  next(createError(404));
});

app.use((err, req, res, next)=>{
  res.status(err.status || 500);
  res.send();
});