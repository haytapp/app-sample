const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        // This method will retrieve up to 10 songs
        try {
          const songs = await Song.findAll({
              limit: 10
          })
          res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error ocurring retrieving the songs'
          })
        }
    },
    async post (req, res) {
        // This method will post a new song
        try {
          const song = await Song.create(req.body)          
          res.send(song)
        } catch (err) {            
            res.status(500).send({
                error: 'An error ocurring adding a new the song'
          })
        }
    }    

}
