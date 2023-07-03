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
