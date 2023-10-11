/**
 *
 * @param {object} obj - User's physical information
 * @returns {number} - Calorie need according to goal
 */
export function calculateDailyCalorieNeed(obj) {
  const { weight, height, age, gender, activityLevel, goal } = obj;
  const genderCoefficient = gender === "male" ? 5 : -161;
  const basalMetabolicRate =
    10 * weight + 6.25 * height - 5 * age + genderCoefficient;
  const calorieGoal = goal === "gain" ? 500 : goal === "lose" ? -500 : 0;
  switch (activityLevel) {
    case "sedentary":
      return basalMetabolicRate * 1.2 + calorieGoal;
    case "lightly-active":
      return basalMetabolicRate * 1.375 + calorieGoal;
    case "moderately-active":
      return basalMetabolicRate * 1.55 + calorieGoal;
    case "very-active":
      return basalMetabolicRate * 1.725 + calorieGoal;
    case "extra-active":
      return basalMetabolicRate * 1.9 + calorieGoal;
  }
}

/**
 *
 * @param {object} obj
 * @returns {boolean}
 */
export function hasEmptyValue(obj) {
  for (const key in obj) {
    if (obj[key] === "") {
      return true;
    }
  }
  return false;
}
