const express = require('express');
const router = express.Router();
const { validateJwtMiddleware } = require("../auth");

//import the question controller to handle our question routes
const questionController = require("../controllers/question.controller")

//get route to return all question categories
router.get("/categories", validateJwtMiddleware, questionController.getCategories)

//get route to retrieve 10 category questions
router.get("/category", validateJwtMiddleware, questionController.getCategoryQuestions)

module.exports = router;

