const express = require('express');
const router = express.Router();

//middleware used to require authentication
const { validateJwtMiddleware } = require("../auth");

//import the user controller to handle our userProfile routes
const userProfileController = require("../controllers/userProfile.controller")

//get route to return all users (requires auth)
router.get("/", validateJwtMiddleware, userProfileController.getProfiles)

// create route to create the intial user profile based on email address
router.post("/", validateJwtMiddleware, userProfileController.createProfile)

//get route to return a specific users (requires auth)
router.get("/:email", validateJwtMiddleware, userProfileController.getProfile)

module.exports = router;
