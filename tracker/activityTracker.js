const readline = require('readline');
const Exercise = require('./Exercise.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function getActivityDetails() {
  const type = await askQuestion("Enter the activity type (walking, running): ");
  const weight = parseFloat(await askQuestion("Enter your weight (in pounds): "));
  const distance = parseFloat(await askQuestion("Enter the distance (in miles): "));
  const time = parseFloat(await askQuestion("Enter the time spent (in minutes): "));
  
  const weightInKg = weight / 2.2;
  
  rl.close();
  
  const exercise = new Exercise(type);
  const calories = exercise.activity.calculate(weightInKg, distance, time);
  console.log(`Calories burned: ${calories}`);
}

getActivityDetails();

