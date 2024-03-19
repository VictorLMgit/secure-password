const express = require("express");
const validateRoutes = require("./validateRoutes.js");

const routes = (app) => {

    app.use(express.json());
    app.use((req, _, next) => {
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
    });
    app.use("/validate-password", validateRoutes);
}


module.exports = routes;