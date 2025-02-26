function Swim() {
    this.calc = (weight, distance, time) => {
        const weightKg = weight / 2.2;
        return (6 * weightKg * 3.5) / 200 * time;
    };
}

function Walk() {
    this.calc = (weight, distance, time) => {
        return (0.035 * weight + (Math.pow(distance, 2) / weight) * 0.029) * time;
    };
}

function Run() {
    this.calc = (weight, distance, time) => {
        return (0.075 * weight + (Math.pow(distance, 2) / weight) * 0.05) * time;
    };
}

function Exercise(activityType) {
    if (activityType === "walking") {
        this.exercise = new Walk();
        this.name = "Walking";
    } else if (activityType === "running") {
        this.exercise = new Run();
        this.name = "Running";
    } else if (activityType === "swimming") {
        this.exercise = new Swim();
        this.name = "Swimming";
    } else {
        throw new Error("Invalid activity type");
    }
}

Exercise.prototype.calculateCalories = function(weight, distance, time) {
    return this.exercise.calc(weight, distance, time);
};

module.exports = Exercise;


