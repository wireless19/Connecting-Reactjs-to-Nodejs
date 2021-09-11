const express = require("express");
routerz = express.Router();
usersRoute = require("../controllers/usersControllers");


//this("/") is the address of the proxy or represents the proxy you will add to the react application package.json file
routerz.get("/", usersRoute.usersController);

module.exports = routerz;