const express = require("express");
const validateRoutes = express.Router();
const ValidateController = require("./../controllers/validade.controller.js");


validateRoutes.post("/", ValidateController.validate);


module.exports = validateRoutes;