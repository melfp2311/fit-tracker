const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    allExercises: [
        {
            type: {
                type: String,
                trim: true
            },
        
            name: {
                type: String,
                trim: true
            },
        
            duration: {
                type: Number
            },
        
            weight: {
                type: Number,
            },
        
            reps: {
                type: Number,
            },
        
            sets: {
                type: Number,
            },
        
            distance: {
                type: Number,
            }
        }
    ]
    
},

{
    toJSON: {
        virtuals: true
    }
}

)

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.allExercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;