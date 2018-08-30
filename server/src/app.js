// app-server v 1.0
// The modules to be used are:
// - express: to enable the web server
const express = require('express')
// -body-parser: to easily  JSON parsing
const bodyParser = require('body-parser')
// - cors: allows any server hit our server (* risk as any server can reach us)
const cors = require('cors')
// - morgan: used for logging/tracing purposes
const morgan = require('morgan')
// dB handling
//const {sequelize} = require ('./models')
var models = require ('./models')
//const Sequelize = require('sequelize')
// const sequelize = new Sequelize('test1', 'root', 'CholulaX2004!', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false
// })

// Check the dB connection...
models.sequelize.authenticate()
.then(() => {
  console.log('Connection established successfully')
})
.catch(err => {
  console.error('Unable to dB', err)
})


// the express app configuration (port 8081)
const config = require('./config/config')

// Defining express app
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Ataching all available end points as defined in routes.js
require('./routes')(app)

models.sequelize.sync()
  .then(() => {
    // Once finishing syncing with sequelize, then start the server
    app.listen(config.port)
    console.log(`Starting server on port ${config.port}`)
  })


