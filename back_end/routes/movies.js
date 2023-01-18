const express = require("express")
const moviesControllers = require ('../controllers/movies.js')
const router = express.Router()
const checkToken = require("../controllers/checkToken")

router.get("/users", checkToken.checkToken, moviesControllers.getMovies)

module.exports = router