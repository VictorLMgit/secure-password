const express = require("express");
const validateRoutes = express.Router();
const ValidateController = require("./../controllers/validade.controller.js");


validateRoutes.post("/", ValidateController.validate, (_, res) => {
    return res.status(204).json();
});


module.exports = validateRoutes;