const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/json', (req, res) => {
    var readStream = fs.readFileSync('./private/sample.json');
    res.send(readStream);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
