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

app.post('/course/99999/user/10001/notes', (req, res)=>{
  /* Response (add expected fields for testing)*/
  var newJson = req.body;
  newJson.id = 3000;
  newJson.deleteDate = null;
  newJson.submitDate = null;
  newJson.approveDate = null;
  newJson.returned = false;
  newJson.feedback = null;
  newJson.url = "http://localhost:8080/course/99999/70009";
  res.send(newJson);
});

app.post('/course/50001/user/10001/notes', (req, res)=>{
  /* Response (add expected fields for testing)*/
  var newJson = req.body;
  newJson.id = 3000;
  newJson.deleteDate = null;
  newJson.submitDate = null;
  newJson.approveDate = null;
  newJson.returned = false;
  newJson.feedback = null;
  newJson.url = "http://localhost:8080/course/50001/70009";
  res.send(newJson);
});

app.post('/course/50002/user/10001/notes', (req, res)=>{
  /* Response (add expected fields for testing)*/
  var newJson = req.body;
  newJson.id = 3000;
  newJson.deleteDate = null;
  newJson.submitDate = null;
  newJson.approveDate = null;
  newJson.returned = false;
  newJson.feedback = null;
  newJson.url = "http://localhost:8080/course/50002/70009";
  res.send(newJson);
});

app.get('/users/10001/courses', (req, res) => {
  var readStream = fs.readFileSync('./private/user_courses.json');
  res.status(200);
  res.send(readStream);
});

app.get('/course/50001/user/10001/publishedNotes', (req, res) => {
  var readStream = fs.readFileSync('./private/published_notes.json');
  res.status(200);
  res.send(readStream);
});
app.get('/course/50002/user/10001/publishedNotes', (req, res) => {
  var readStream = fs.readFileSync('./private/published_notes.json');
  res.status(200);
  res.send(readStream);
});

app.get('/course/50001/user/10001/savedNotes', (req, res) => {
  var readStream = fs.readFileSync('./private/saved_notes.json');
  res.status(200);
  res.send(readStream);
});

app.get('/course/99999/user/10001/savedNotes', (req, res) => {
  var readStream = fs.readFileSync('./private/private_notes.json');
  res.status(200);
  res.send(readStream);
});

/* This will result in an empty set */
app.get('/course/50002/user/10001/savedNotes', (req, res) => {
  var readStream = fs.readFileSync('./private/empty_notes.json');
  res.status(200);
  res.send(readStream);
});

/* This will result in an empty set */
app.get('/course/50002/user/10001/submittedNotes', (req, res) => {
  var readStream = fs.readFileSync('./private/submitted_notes.json');
  res.status(200);
  res.send(readStream);
});

/* This will result in an empty set */
app.get('/course/50001/user/10001/submittedNotes', (req, res) => {
  var readStream = fs.readFileSync('./private/empty_notes.json');
  res.status(200);
  res.send(readStream);
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