//Задание 1️⃣
//Напишите функцию multiple(a, b), которая перемножает два числа между собой.
//Функция возвращает результат умножения

function multiple(a, b) {
  return a * b;
}

console.log(multiple(30, 3));

//Задание 2️⃣
//Напишите функцию buildDate(day, month, year), которая принимает на вход числами день недели, месяц и год.
//Функция возвращает дату строкой в формате dd/mm/yyyy.

function buildDate(day, month, year) {
  let dd = day;
  let mm = month;
  let yyyy = year;
  if (day < 10) {
    dd = "0" + dd;
  } else if (day > 31 || month == 2) {
    dd = "error";
  }
  if (month > 12 || month == 0) {
    mm = "error";
  } else if (month < 10) {
    mm = "0" + mm;
  }
  if (year < 1000) yyyy = yyyy + "bc";
  const Date = dd + "/" + mm + "/" + yyyy;
  return Date;
}

console.log(buildDate(7, 7, 2023));
console.log(buildDate(31, 0, 765));

//Задание 3️⃣
//Напишите функцию isAdult(age), которая принимает на вход возраст. Если возраст больше или равен 18.
//функция возвращает true. Иначе - false.

function isAdult(age) {
  return age >= 18 && age != 0;
}

console.log(isAdult(120));

//Задание 4️⃣
//Напишите функцию getMonthByNumber(monthNumber), которая на вход принимает порядковый номер месяца от 1 до 12.
//Функция возвращает строкой название месяца (например, 'март').
//Для решения задачи можно применить конструкцию switch-case (just google it).

function getMonthByNumber(monthNumber) {
  if (monthNumber <= 0 || monthNumber > 12) {
    monthNumber = "error";
  }
  switch (monthNumber) {
    case 1:
      monthNumber = "january";
      break;
    case 2:
      monthNumber = "february";
      break;
    case 3:
      monthNumber = "march";
      break;
    case 4:
      monthNumber = "april";
      break;
    case 5:
      cmonthNumber = "may";
      break;
    case 6:
      monthNumber = "june";
      break;
    case 7:
      monthNumber = "july";
      break;
    case 8:
      console.log("august");
      break;
    case 9:
      monthNumber = "september";
      break;
    case 10:
      monthNumber = "october";
      break;
    case 11:
      cmonthNumber = "november";
      break;
    case 12:
      monthNumber = "december";
      break;
  }
  return monthNumber;
}
console.log(getMonthByNumber(12));

//Задание 5️⃣
//Напишите функцию convertRub(valueRub, currency), которая конвертирует рубли в другие валюты.
// Функция принимает число в рублях и валюту для перевода строкой ('USD, 'EUR', 'KZT', 'AED').
// Функция возвращает результат конвертации. Для решения задачи можно применить конструкцию switch-case.

function convertRub(valueRub, currency) {
  const Rates = {
    USD: 0.011,
    EUR: 0.01,
    KZT: 4.89,
    AED: 0.041,
  };

  if (!RATES[currency]) {
    return "error";
  }
  return valueRub * RATES[currency];
}
