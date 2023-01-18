const db = require('../database')
const jwt = require('jsonwebtoken')

const getMovies = (req, res) => {
    try{
        const authHeader = req.headers.autorization;
        if(authHeader){
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.KEY, (err) => {
                if(err)
                    return res.status(403).send('Wrong Token')
                db.execute('SELECT * FROM movies', [],
                    (err, data) => {
                    if (err) {
                        throw err
                    } else {
                        if (data == 0) {
                            res.status(404).send('no movies found');
                        } else{
                            res.status(200).send(data);
                        }
                    }
                }
                )
            })
        }
    } catch (err) {
        return res.status(500).send({ error: err, message: err.message});
    }
}

module.exports = {getMovies}