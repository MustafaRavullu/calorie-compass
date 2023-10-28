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
    case "lightly active":
      return basalMetabolicRate * 1.375 + calorieGoal;
    case "moderately active":
      return basalMetabolicRate * 1.55 + calorieGoal;
    case "very active":
      return basalMetabolicRate * 1.725 + calorieGoal;
    case "extra active":
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

export function isDuplicateItem(id, array) {
  return array.some((item) => item.id === id);
}

export function isAlreadyMarkedAsEaten(item) {
  return item.eaten === true;
}

export function isSumExceedsDailyCalorieNeed(item, array, threshold) {
  let prevSum = 0;
  for (let i = 0; i < array?.length; i++) {
    if (array[i].eaten === true) {
      prevSum += array[i].calories;
    }
  }
  return prevSum + item.calories > threshold;
}

export function handleReset(initialValueFunc) {
  initialValueFunc();
  localStorage.clear();
}

export function isNewDay(savedDay) {
  if (savedDay === undefined) return;
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  return savedDay !== currentDay;
}

export function resetCompletedDailyCalorieNeed(
  resetFunc,
  unmarkFunc,
  recalcBarPercentage
) {
  resetFunc(0);
  unmarkFunc();
  recalcBarPercentage();
}
