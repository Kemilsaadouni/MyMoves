const express = require("express")
const moviesControllers = require ('../controllers/movies.js')
const router = express.Router()
const checkToken = require("../controllers/checkToken")

router.get("/movies", moviesControllers.getMovies)

module.exports = router