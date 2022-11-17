const express = require('express');
const router = express.Router();

//middleware used to require authentication
const { validateJwtMiddleware } = require("../auth");

//import the user controller to handle our userStats routes
const userStatsController = require("../controllers/userStats.controller")

//get route to return all users (requires auth)
router.get("/", validateJwtMiddleware, userStatsController.getAllUserStats)

// create route to create the intial user Stats based on email address
router.post("/", userStatsController.createUserStats)

//get route to return a specific users (requires auth)
router.get("/:email", validateJwtMiddleware, userStatsController.getUserStats)

// patch route to update only a portion of the user Stats data
router.patch("/:email", validateJwtMiddleware, userStatsController.partialUserStatsUpdate)

module.exports = router;
