
const {User} = require('../models')

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
    }
}