//Import our model so we can us it to interact with the realated data in MongoDB
const UserStats = require("../models/userStats.model")


//build our controller that will have our CRUD and other methods for our users' stats
const userStatsController = {

    //method to create a new set of user stats
    createUserStats: async function(req, res){

        try {

            //store user stats data sent through the request
            const userStatsData = req.body;

            //pass the userStatsData to the create method of the userStats model
            let newUserStats = await UserStats.create(userStatsData)

            //return the newly created user stats
            res.status(201).json(await UserStats.findById(newUserStats._id))
            
        } catch (error) {
            //handle errors creating user stats
            console.log("failed to create user stats: " + error)
            res.status(400).json({
                message: error.message,
                statusCode: res.statusCode
            })
        }

    },
    //method to get all users' stats using async/await syntax
    getAllUserStats: async function(req, res){

        //create base query
        let query = {}

        //using a try/catch since we are using asyn/await and want to catch any errors if the code in the try block fails
        try {
            
            //use our model to find users' stats that match a query.
            //{} is the current query which really mean find all the users's stats data
            //we use await here since this is an async process and we want the code to wait for this to finish before moving on to the next line of code
            let allUsersStats = await UserStats.find(query)
            
            //return all the users that we found in JSON format
            res.json(allUsersStats)
            
        } catch (error) {
            console.log("error getting all users: " + error)
            //if any code in the try block fails, send the user a HTTP status of 400 and a message stating we could not find any users
            res.status(400).json({
                message: error.message,
                statusCode: res.statusCode
            })

        }
    },
    //method to update a user's stats
    partialUserStatsUpdate: async function(req, res, next){

        try {

            //get the user email from the request params
            const email = req.params.email;

            //store user data sent through the request
            const newUserStatsData = req.body;

            //try to find our user by the email provided in the request params
            const profile = await UserStats.findOne({email: email})

            //update the user's stats if we found a match and save or return a 404
            if(profile){
                Object.assign(profile, newUserStatsData)
                await profile.save()
            }else{
                res.status(404).send({message: "User not found", statusCode: res.statusCode});
            }

            //respond with updated user stats
            res.json(await UserStats.findById(profile._id))
            
        } catch (error) {
            console.log("failed to update user's stats: " + error)
            res.status(400).json({
                message: error.message,
                statusCode: res.statusCode
            })
        }

    },
    //method to get all users using async/await syntax
    getUserStats: async function(req, res){

        //using a try/catch since we are using asyn/await and want to catch any errors if the code in the try block fails
        try {

            //get the email address of the user from the url parameters
            const userEmail = req.params.email;
            
            //use our model to find the user that match a query.
            //{email: some@email.com} is the current query which really mean find the user with that email
            //we use await here since this is an async process and we want the code to wait for this to finish before moving on to the next line of code
            let foundUser = await UserStats.findOne({email: userEmail})

            //if we found the user, return that user otherwise return a 404
            if(foundUser){
                res.json(foundUser)
            }else{
                res.status(404).send({
                    status: res.statusCode,
                    message: "User Not Found!"
                })
            }
            
        } catch (error) {
            console.log("error getting user: " + error)
            //if any code in the try block fails, send the user a HTTP status of 400 and a message stating we could not find the user
            res.status(400).json({
                message: error.message,
                statusCode: res.statusCode
            })

        }
    }
    

}

module.exports = userStatsController;
