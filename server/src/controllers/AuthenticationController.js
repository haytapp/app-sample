
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// This function will be user to sign the user object using jwt sign library
// returns a jwt object
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
  })
}

// This end point should insert the user from the payload to the dB
module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This emails is already used in an account'
            })
        }
    },

    // Process the login
    async register (req, res) {
        try {
            // first we check the email, using findOne method
            const {email, password} = req.body
            const user = await User.findOne({
              where: {
                  email: email
              }    
            })
            if (!user) {
              // if not found return a standard error  
              return res.status(403).send({
                  error: 'There is no account with the email provided'
              })
            }
            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
              return res.status(403).send({
                error: 'There password provided is incorrect'
              })
            }
            const userJson = user.toJSON()            
            res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })

        } catch (err) {
            res.status(500).send({
              error: 'An error ocurred trying to log in'
            })
        }
    }    
}