"use strict";

const totalInput = "20";
const completedInput = "11";

const maxTasks = 1000;

if (typeof totalInput !== "string" || typeof completedInput !== "string") {
  console.log("Ошибка: входные данные должны быть строками");
} else {
  const totalText = totalInput.trim();
  const completedText = completedInput.trim();

  if (totalText === "" || completedText === "") {
    console.log("Ошибка: пустой ввод");
  } else {
    const totalTasks = Number(totalText);
    const completedTasks = Number(completedText);

    if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
      console.log("Ошибка: введено не число или бесконечное значение");
    } else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
      console.log("Ошибка: количество задач должно быть целым");
    } else if (totalTasks < 0 || completedTasks < 0) {
      console.log("Ошибка: количество задач не может быть отрицательным");
    } else if (totalTasks > maxTasks) {
      console.log(`Ошибка: общее количество задач не может превышать ${maxTasks}`);
    } else if (completedTasks > totalTasks) {
      console.log("Ошибка: выполнено больше задач, чем существует");
    } else if (totalTasks === 0) {
      console.log("Задач пока нет");
    } else {
      const remainingTasks = totalTasks - completedTasks;
      const percentage = (completedTasks / totalTasks) * 100;

      let status;
      if (completedTasks === 0) {
        status = "Не начато";
      } else if (completedTasks === totalTasks) {
        status = "Завершено";
      } else {
        status = "В работе";
      }

      console.log(`Всего задач: ${totalTasks}`);
      console.log(`Выполнено: ${completedTasks}`);
      console.log(`Осталось: ${remainingTasks}`);
      console.log(`Прогресс: ${percentage.toFixed(1)}%`);
      console.log(`Статус: ${status}`);
    }
  }
}