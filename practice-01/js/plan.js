"use strict";

const totalTasks = 5;
const completedTasks = 2;
const dailyLimit = "2";

const maxTasks = 1000;
const maxDailyLimit = 1000;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
  console.log("Ошибка: количество задач должно быть числом");
} else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
  console.log("Ошибка: недопустимое числовое значение количества задач");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: количество задач должно быть целым");
} else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: количество задач не может быть отрицательным");
} else if (totalTasks > maxTasks) {
  console.log(`Ошибка: общее количество задач не может превышать ${maxTasks}`);
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше задач, чем существует");

} else if (typeof dailyLimit !== "number") {
  console.log("Ошибка: дневная норма должна быть числом");
} else if (!Number.isFinite(dailyLimit)) {
  console.log("Ошибка: недопустимое значение дневной нормы");
} else if (!Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дневная норма должна быть целой");
} else if (dailyLimit < 1 || dailyLimit > maxDailyLimit) {
  console.log(`Ошибка: дневная норма должна быть от 1 до ${maxDailyLimit}`);

// Данные корректны — строим план
} else {
  let remainingTasks = totalTasks - completedTasks;
  let day = 0;

  console.log(`Осталось задач: ${remainingTasks}`);

  if (remainingTasks === 0) {
    if (totalTasks === 0) {
      console.log("Задач пока нет");
    } else {
      console.log("Все задачи уже выполнены");
    }
  }

  while (remainingTasks > 0) {
    day += 1;
    const tasksToday = Math.min(dailyLimit, remainingTasks);
    remainingTasks -= tasksToday;
    console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
  }

  console.log(`Потребуется дней: ${day}`);
}