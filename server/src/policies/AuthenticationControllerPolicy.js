const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        // using joi pre-built validation, the schema is used to validate the inputs
        const schema = {
            email: Joi.string().email(),
            name: Joi.string().regex(
                // only letters, up to 50 chars
                new RegExp('^[a-zA-Z]{1,50}$', "u")
            ),
            password: Joi.string().regex(
                // letters, numbers 8-32 chars long
                new RegExp('^[a-zA-Z0-9]{8,32}$', "u")
            )
        }
        console.log(req.body)
        // After defining our validator, let's put it to work
        const {error, value} = Joi.validate(req.body, schema)
        if (error) {
            // if validation failed, let's find out what happen?
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'name':
                    res.status(400).send({
                        error: 'Only characters should be using for name'
                    })
                    break                
                case 'password':
                    res.status(400).send({
                        error: `The password provided do not meet the following rules:
                        <br>
                        1. It must contain only letters and numbers
                        <br>
                        2. It must be between 8-32 characters long
                        `
                    })
                    break
                
                default:
                    res.status(400).send({                        
                        error: 'Registration failed. Invalid registration information.'
                    })
            }
        } else {
            next()
        }
    }
}