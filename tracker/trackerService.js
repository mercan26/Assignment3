var Exercise = require("./Exercise.js");

function Tracker(exerciseType, weight, distance, time) {
    try {
        this.activity = new Exercise(exerciseType);
        this.weight = weight;
        this.distance = distance;
        this.time = time;
        this.caloriesBurned = this.activity.calculateCalories(this.weight, this.distance, this.time);
    } catch (error) {
        console.log(error);
    }
}

module.exports = Tracker;
