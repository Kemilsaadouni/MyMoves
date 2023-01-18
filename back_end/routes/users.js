const express = require("express")
const userControllers = require("../controllers/users")
const router = express.Router()
const checkToken = require("../controllers/checkToken")

router.post("/users", userControllers.createUser);
router.get("/users", checkToken.checkToken, userControllers.getUsers)
router.get("/users/:id", checkToken.checkToken, userControllers.getUserByUserId)
router.put("/users",checkToken.checkToken, userControllers.updateUser)
router.post("/login", userControllers.login)

module.exports = router