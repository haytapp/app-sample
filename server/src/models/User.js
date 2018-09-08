// Defining the user module

// Including bcrypt to hash the password
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 8

// The following method will hash the password
function hashPassword (user, options) {

  if (!user.changed('password')) {
    return
  }
  return bcrypt.hash(user.password, SALT_ROUNDS)
    .then(function (hashedPassword) {
        user.setDataValue('password', hashedPassword)
    })
}

// This a function that will take sequelize and DataTypes as args and
// will return the model
module.exports = (sequelize, DataTypes) => {
    // converting the User into an object (for password hashing)
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    }, { 
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    })
    // the user model is responsible of the password comparisson
    User.prototype.comparePassword = function (password) {
        var hash = bcrypt.hashSync(password, SALT_ROUNDS)
        return bcrypt.compare(password, hash)        
    }

    return User
}
