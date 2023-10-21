const express = require("express")
    , authRoutes = express.Router()
    , authController = require("../controllers/auth");

authRoutes.post(""  , authController.auth);

module.exports = authRoutes;
