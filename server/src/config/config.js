module.exports = {
    port: process.env.PORT || 8081,
    // Configuring dB characteristics (db name will be tabtracker)
    db: {        
        database: 'tabtracker',
        user: 'root',
        password: 'CholulaX2004!',
        options: {
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,   
            operatorsAliases: false
        }
    },
    authentication: {
        // this token is only know by the server
        jwtSecret: 'shhEsmiSecreto!'
    }
}
