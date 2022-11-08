const express = require('express');
const router = express.Router();
const { validateJwtMiddleware } = require("../auth");

//import the question controller to handle our question routes
const questionController = require("../controllers/question.controller")

//get route to return all question categories
router.get("/", validateJwtMiddleware, questionController.getCategories)

//put route to set the current session category
router.put("/", validateJwtMiddleware, questionController.setCategory)

//get route to retrieve 10 category questions
router.get("/", validateJwtMiddleware, questionController.getCategoryQuestions)

//get route to retrieve question based on number question
router.get("/:number", validateJwtMiddleware, questionController.getCategoryQuestion)

//put route to update user answer to question
router.put("/:number", validateJwtMiddleware, questionController.setQuestionAnswer)

module.exports = router;

