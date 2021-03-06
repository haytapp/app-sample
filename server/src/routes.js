// This file will contain all the routes defined in the App
// is used to keep organized with their respective controllers

// The list of available controllers for this app includes:
const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')

// List of available policies
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register',
      // Before hit the controller, this function will perform the validation
      AuthenticationControllerPolicy.register,
      AuthenticationController.register),

    app.post('/login',
      // Before hit the controller, this function will perform the validation      
      AuthenticationController.login),

    app.get('/songs',
      SongsController.index),

    app.post('/songs',
      SongsController.post)      
}
