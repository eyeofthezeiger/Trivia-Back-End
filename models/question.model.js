//bring in mongoose so we can create a schema that represents the data for a User
const mongoose = require("mongoose");

//Create our schema using mongoose that contains the fields and their data types for our Questions
//More info: https://mongoosejs.com/docs/schematypes.html 
const questionSchema = new mongoose.Schema({
    category: {
        type: String, 
        required: true,
        minlength: 2
    },
    id: {
        type: String, 
        required: true,
        index: { 
            unique: true 
        },
        minlength: 2
    },
    correctAnswer: { 
        type: String, 
        required: true, 
        minlength: 2
    },
    incorrectAnswers: { 
        type: [], 
        required: true, 
        minlength: 3
    },
    question: {
        type: String,
        required: true,
        minlength: 2
    },
    tags: {
        type: [],
        required: false
    },
    type: {
        type: String,
        required: true,
        minlength: 2
    },
    difficulty: {
        type: String,
        required: true,
        minlength: 2
    },
    regions: {
        type: [],
        required: false
    }
})

//Generate the model our code with interact with from the above schema
//Models allow us to interact with the data inside our MongoDB collections
//More info: https://mongoosejs.com/docs/models.html
const Question = mongoose.model('Question', questionSchema);

//export our model
module.exports = Question;