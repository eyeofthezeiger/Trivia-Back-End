

const questionController = {
    //ToDo
    getCategories: async function(req, res){
        try {

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
    //ToDo
    setCategory: async function(req, res){
        try {

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
    //ToDo
    getCategoryQuestions: async function(req, res){
        try {

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
    //ToDo
    getCategoryQuestion: async function(req, res){
        try {

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
    //ToDo
    setQuestionAnswer: async function(req, res){
        try {

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