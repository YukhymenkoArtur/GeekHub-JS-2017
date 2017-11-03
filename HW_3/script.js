/* 1. Створити об'єкт.
В цьому об'єкті написати власні реалізації наступних методів масиву: pop(), push(), slice(), join(), reverse()
метод pop() */
var a = ["а","б","в","я"];
c=a.pop(3); //a=[а,б,в]
console.log(c); //"я"


// метод push()
function frontend() {
    var b = ["html", "css", "js"];
    b.push("CMS");
    console.log(b);
}
frontend();  // (4) ["html", "css", "js", "CMS"]


// метод slice()
var a = [1,2,3,4,5,6,7,8,9];

mas=a.slice(5);
alert(mas); //[6,7,8,9]

console.log(a).slice(5,2); //[]


// метод join()
var mas = new Array("5", "пара", "9", 25, 9);

s = mas.join(" - ");
console.log(s);


// метод reverse()
function reverse() {
    var number = ["one","two","three"];
    number.reverse();
    console.log(number);
}
reverse(); // (3) ["three", "two", "one"]




/* 5. Рекурсія
5.1. Написати рекурсивну функцію для обчислення факторіалу  */
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(3)); // 6


// 5.2. Написати рекурсивну функцію для обчислення степені числа
function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}
console.log( pow(3, 3) ); // 27


// 5.3. Написати рекурсивну функцію для обчислення суми цифр цілого числа
// (наприклад, сума цифр числа 3742 буде 3+7+4+2 = 16)
function summa() {
    var n = ("3742")
    var s = 0
    while (n > 0)
    {
        s += n % 10
        n = Math.floor(n/10)
    }
    console.log(s);
}
summa();

// 5.4 
function factorial(n) {
		var result = n;
		for (var i = 1; i < n; i++) {
			result *= (n - i);
		}
		return result;
	}

console.log( factorial(5))


