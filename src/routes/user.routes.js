
const login = require("../controllers/admin/login");
const authenticateUserJWT = require("../utils/middleware/auth");

const userRoutes = require("express").Router();

userRoutes.post("/login", login) 



module.exports = userRoutes;