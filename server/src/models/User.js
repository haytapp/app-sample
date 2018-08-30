// Defining the user module
// This a function that will take sequelize and DataTypes as args and
// will return the model
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
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
    })
    // Specify relationships to other models
    // User.associate = function(models) {
    //     models.User.hasMany(models.Task);
    //   };
    return User
}