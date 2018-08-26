// app-server v 1.0
// The modules to be used are:
// - express: to enable the web server
const express = require('express');
// -body-parser: to easily  JSON parsing
const bodyParser = require('body-parser');
// - cors: allows any server hit our server (* risk as any server can reach us)
const cors = require('cors');
// - morgan: used for logging/tracing purposes
const morgan = require('morgan');

// Defining express app
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Enabling end point
app.get('/status', (req,res) => {
  res.send({
    message: "Hello World... as ususal!"
  })
});

app.post('/register', (req,res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered - Cheers!`
  })
});

// Enabling listening
app.listen(process.env.PORT || 8081);
