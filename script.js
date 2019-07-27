'use strict'

let money = +prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	stok: money,
	time_data: time,
	expenses: "Введите обязательную статью расходов в этом месяце",
	optinalExpenses: 0,
	income: 0,
	savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
	answer2 = +prompt("Во сколько обойдется?");

let expenses = {
	answer1 : answer2
};

console.log(typeof(money));
console.log(expenses);

let stok_for_mounth = money/30;
alert("Ваш бюджет" stok_for_mounth);
