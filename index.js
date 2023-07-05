//this way of writing js-code is the most useful

const h1 = document.querySelector("h1");
h1.innerText = "Hello JS!!!";
h1.style.color = "orange";
let numberOne = 1;
numberOne = 3;
console.log(numberOne);

//так правильно оставлять переменную в коде, в отличие от записи 'let c' (выведет значение "undefined")
let c = null;
console.log(c);

//cоздание строки
const Name = "Sam";
console.log(Name);

const surName = "Mu";
console.log(surName);

//объединение строк (конкатенация) два способа
//1 - выведет значение 'SamMu' без пробела
console.log(Name + surName);
//2 - правильно создать новую переменную и в ней объединить другие переменные через '+'
const fullName = "Имя и Фамилия: " + Name + " " + surName;
console.log(fullName);
//выведет значение "Имя и Фамилия: Sam Mu"
//такую запись делали раньше, а сейчас используют "шаблонную запись"

//шаблонная запись при объединении строк
const fullNameNew = `ФИО: ${Name} ${surName}`;
console.log(fullNameNew);

//длина строки
console.log(fullNameNew.length);

const myNameLength = Name.length;
console.log(myNameLength);

// операторы сравнения (чаще всего в рабочих задачах сравнивают цифры и строки!!!)

// Сравнение == (не учитывется тип данных)
const d = 1;
const e = 3;
console.log(1 == 3); // один равно трем? - нет (false)

//Пример про игнор типа данных
const f = "1";
console.log(d == f); //ответ будет - да.

//Не равно != (еще есть строгое не равно !==)
console.log(1 != 3); // один не равно трем? - да (true)

//Больше >
console.log(1 > 3); // один больше трёх? - нет (false)

//Меньше <
console.log(1 < 3); // один меньше трёх? - да (true)

//Cравнение строк
const myName = "Bob";
const myPalName = "Bobby";
console.log(myName == myPalName); //ответ - нет (false)

//Cравнение boolean
console.log(true == true);

//Строгое сравнение === (это лучше всего использовать, так как учитывается тип данных)
console.log(d === f); //ответ будет - нет (false).

//Пример для приложения в заданиях
const bagPrice = 30000;
const limit = 20000;
const canIBuyBag = bagPrice < limit;
console.log(canIBuyBag);

//---ЛОГИЧЕСКИЕ ОПЕРАТОРЫ---

// И &&
const isHomeworkDone = true;
const isRoomClean = true;
const canIGoToParty = isHomeworkDone && isRoomClean;
console.log(canIGoToParty); //ответ будет - да, так как оба условия выполнены.

// ИЛИ || (нестрогое выполнение условий)
const isRoomClean2 = false;
const canIGoToParty2 = isHomeworkDone || isRoomClean2;

console.log(canIGoToParty); //ответ будет - да, так как одно из условий выполнено(true)

// НЕ !
const isRoomDirty = true;
const canIGoToParty3 = isHomeworkDone || !isRoomDirty;

console.log(canIGoToParty3); //true

// КОМБИНИРОВАНИЕ ОПЕРАТОРОВ
const doesFatherAllow = true;
const canIGoToParty4 = isHomeworkDone || !isRoomDirty || doesFatherAllow;

console.log(canIGoToParty4);

//---УСЛОВИЯ (ВЕТВЛЕНИЕ)---

// Если if
const age = 29;

if (age > 18) {
  //true (условие должно выполняться)
  console.log("Тебе больше 18");
  console.log("Круто!!!");
} else {
  console.log("не переживай"); // на тот случай, если условие не будет выполнено (например 17 > 18 - false)
}
console.log("эта строчка выполняется всегда, даже без условий");

//пример с логическими операторами
if (age === 18) {
  console.log("Супер!");
  console.log("Круто!!!");
} else {
  console.log("не переживай");
}

// пример с множеством условий

const herAge = 18;

if ((isHomeworkDone || !isRoomDirty || doesFatherAllow) && herAge > 18) {
  console.log("Ты можешь идти погулять");
} else {
  console.log("Ты не можешь идти погулять");
}

// if-else-if
// пример с ютуба (https://www.youtube.com/watch?v=OIIBECEaYKI)

const button = document.querySelector("button");
const input = document.querySelector(".yourAge");

button.onclick = () => {
  let num = +input.value;
  if (num >= 16 && num < 69) {
    console.log("Welcome!");
  } else if (num >= 70) {
    console.log("my congrats granpa!!!");
  } else {
    console.log("Access denied");
  }
  //switchcase
  switch (num) {
    case 15:
      console.log("try again in a year");
      break;
    case 16:
      console.log("nice to see you!");
      break;
    default:
      console.log("let's go");
  }
};

s;
