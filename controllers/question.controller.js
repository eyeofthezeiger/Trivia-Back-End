//Import our model so we can us it to interact with the realated data in MongoDB
const Question = require("../models/question.model")


//build our controller that will have our CRUD and other methods for our users
const questionController = {

    //method to get all users using async/await syntax
    getQuestions: async function(req, res){

        //create base query
        let query = {}

        //using a try/catch since we are using asyn/await and want to catch any errors if the code in the try block fails
        try {
            
            //use our model to find users that match a query.
            //{} is the current query which really mean find all the users
            //we use await here since this is an async process and we want the code to wait for this to finish before moving on to the next line of code
            let allQuestions = await Question.find(query)
            
            //return all the users that we found in JSON format
            res.json(allQuestions)
            
        } catch (error) {
            console.log("error getting all questions: " + error)
            //if any code in the try block fails, send the user a HTTP status of 400 and a message stating we could not find any users
            res.status(400).json({
                message: error.message,
                statusCode: res.statusCode
            })

        }
    }
    

}

module.exports = questionController;
