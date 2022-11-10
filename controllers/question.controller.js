const Question = require("../models/question.model")

const questionController = {
    //ToDo
    getCategories: async function(req, res){
        try {
            //This line parses through the Question DB to find the unique values in the category field
            let categories = await Question.distinct('category');

            res.json(categories);
        }

        catch (error) {
            console.log("error getting user: " + error)
            //if any code in the try block fails, send the user a HTTP status of 400 and a message stating we could not find the user
            res.status(400).json({
                message: error.message,
                statusCode: res.statusCode
            })
        }
    },

    getCategoryQuestions: async function(req, res){
        try {
            //Declaring userCategory variable from the category parameter value in the path
            const userCategory = req.query.category;

            //Finding all questions by category
            let questions = await Question.find().all('category', [userCategory]);

            //Determining if the questions object has any records
            const isEmpty = Object.keys(questions).length === 0;

            //This if else statement checks to see if there are questions in the object and either sends them or kicks
            //off a 404 error
            if (!isEmpty) {
                res.json(questions);
            } else {
                res.status(404).send({
                    status: res.statusCode,
                    message: "Category Not Found!"
                })
            }
        }

        catch (error) {
            console.log("error getting user: " + error)
            //if any code in the try block fails, send the user a HTTP status of 400 and a message stating we could not find the user
            res.status(400).json({
                message: error.message,
                statusCode: res.statusCode
            })
        }
    }
}

module.exports = questionController;