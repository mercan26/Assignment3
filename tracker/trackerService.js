const fs = require('fs');
const path = require('path');
const Exercise = require("./Exercise.js");

let totalCalories = 0;

function logActivity(activityDetails) {
  const logFilePath = path.join(__dirname, 'activityLog.json');

  if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, JSON.stringify([activityDetails], null, 2));
  } else {
    const existingLogs = JSON.parse(fs.readFileSync(logFilePath, 'utf-8'));
    existingLogs.push(activityDetails);
    fs.writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2));
  }
}

function validateInputs(weight, distance, time) {
  if (weight <= 0 || distance <= 0 || time <= 0) {
    throw new Error("Invalid input: Weight, distance, and time must be positive values.");
  }
}

function recordActivity(type, weight, distance, time) {
  try {
    validateInputs(weight, distance, time);
    
    const exercise = new Exercise(type);
    
    const activityDetails = {
      activityType: type,
      weight: weight,
      distance: distance,
      time: time,
      caloriesBurned: exercise.activity.calculate(weight, distance, time),
      timestamp: new Date().toISOString(),
    };
    
    logActivity(activityDetails);
    console.log(`Activity logged: ${type}`);
  } catch (error) {
    console.error(error.message);
  }
}

function addCalories(weight, distance, time) {
  const caloriesBurned = this.exercise.calculate(weight, distance, time);
  totalCalories += caloriesBurned;
  console.log(`Total Calories Burned: ${totalCalories}`);
}

module.exports = {
  recordActivity,
  addCalories
};
