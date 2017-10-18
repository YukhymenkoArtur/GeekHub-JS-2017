// 1. Трикутник в циклі
var abc = "#";
for (abc; abc.length < 8; abc += "#")
  console.log(abc);


// 2. FizzBuzz (не впевнений що в мене працює належним чином)
var i;
for (i = 0; i < 101; i++) {
	if (i % 3 == 0) {
		console.log ("Fizz");
	}
	else if (i % 5 == 0) {
		console.log ("Buzz");
		}
}


// 3. Шахматная доска
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);


/* 4. Завдання мінімум. Для перевірки роботи вводимо в консолі
console.log(minimum(х, у)) де х і у - довільні числа
*/
function minimum(x, y) {
	if (x > y) {
		return y;
	} else {
		return x;
	}
}


// 5. Рекурсія
function isEven(i) {
	if (i == 0)
		return true;
	else if (i == 1)
		return false;
	else 
		return isEven(i -2);
}
// console.log(isEven(50));
// true
// console.log(isEven(75));
// false

/* переписав ф-цію таким чином, щоб приймала 
від'ємні значення */
function isEven(i) {
	if (i == 0)
		return true;
	else if (i == 1)
		return false;
	else if (i < 0)
		return isEven(-i);
	else 
		return isEven(i -2);
}
// console.log(isEven(-75));
// false


// 6. Рахуємо боби
function countBs (a) {
var result = 0;
for (var i = 0; i < a.length; i++) {
if (a[i] === "b") {
result += 1;
}
}
return result;
}

function countBs (a, b) {
var result = 0;
for (var i = 0; i < a.length; i++) {
if (a.charAt(i) === b) {
result += 1;
}
}
return result;
}

console.log(countBs ("bbbbbb", "b"));