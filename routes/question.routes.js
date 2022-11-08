const express = require('express');
const router = express.Router();


//import the question controller to handle our question routes
const questionController = require("../controllers/question.controller")

//get route to return all questions
router.get("/", questionController.getQuestions)

module.exports = router;
