function Exercise(type, customFormula) {
  this.type = type;

  const walking = function () {
    this.calculate = function(weight, distance, time) {
      return (0.035 * weight + Math.pow(distance, 2) / height * 0.029) * time;
    };
  };

  const running = function () {
    this.calculate = function(weight, distance, time) {
      return (0.075 * weight + 0.2 * distance * 0.029) * time;
    };
  };

  if (type === "walking") {
    this.activity = new walking();
  } else if (type === "running") {
    this.activity = new running();
  } else if (customFormula && typeof customFormula === 'function') {
    this.activity = {
      calculate: customFormula,
    };
  } else {
    throw new Error("Invalid activity type or custom formula.");
  }
}

module.exports = Exercise;
