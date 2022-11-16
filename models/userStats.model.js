//bring in mongoose so we can create a schema that represents the data for a User Stats
const mongoose = require("mongoose");

// Used to include the virtual field in the JSON response.  Virtuals not included by default.
const opts = { toJSON: { virtuals: true } };

//Create our schema using mongoose that contains the fields and their data types for our User Stats
//More info: https://mongoosejs.com/docs/schematypes.html
const userStatsSchema = new mongoose.Schema({
    questionsAttempted: {
        type: Number, 
        required: false,
        minlength: 1,
        default: 0
    },
    correctAnswers: {
        type: Number, 
        required: false,
        minlength: 1,
        default: 0
    },
    wrongAnswers: {
        type: Number, 
        required: false,
        minlength: 1,
        default: 0
    },
    favoritesList: {
        type: [], 
        required: false,
        
    },
    email: { 
        type: String, 
        required: true, 
        index: { 
            unique: true 
        },
        match: [/.+\@.+\..+/, "Invalid E-mail Address"],
    }
}, opts)

// Virtual field to calculate the win/loss ratio
userStatsSchema.virtual('winRatio').get(function() {
    let num = (this.correctAnswers / this.questionsAttempted) * 100
    return Math.round(num)
  });

//Generate the model our code with interact with from the above schema
//Models allow us to interact with the data inside our MongoDB collections
//More info: https://mongoosejs.com/docs/models.html
const UserStats = mongoose.model('UserStats', userStatsSchema);

//export our model
module.exports = UserStats;