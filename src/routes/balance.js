const express = require("express")
    , balanceRoutes = express.Router()
    , balanceController = require("../controllers/balance");

balanceRoutes.get(""  , balanceController.getAll);

module.exports = balanceRoutes;
