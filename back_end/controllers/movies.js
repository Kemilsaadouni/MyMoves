const db = require('../database')

const getMovies = function (req, res) {
    db.query("SELECT * FROM movies",
        (err, data) => {
        if (err) {
            throw err;
        } else{
            res.status(200).send(data)
        }
    })
}

module.exports = {getMovies}