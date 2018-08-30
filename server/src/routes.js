// This file will contain all the routes defined in the App
module.exports = (app) => {
    app.get('/status', (req,res) => {
        res.send({
          message: "Status: I'm doing fine! How about you?"
        })
      })    
    app.post('/register', (req,res) => {
        res.send({
          message: `Hello ${req.body.email}! Your user was registered - Cheers!`
        })
      })
}
