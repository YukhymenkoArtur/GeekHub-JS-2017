/* 1. Створити об'єкт.
В цьому об'єкті написати власні реалізації наступних методів масиву: pop(), push(), slice(), join(), reverse()
метод pop() */
function frontend() {
    var a = ["html", "css", "js", "1C"];
    a.pop();
    console.log(a);
}
frontend(); // (3) ["html", "css", "js"]


// метод push()
function frontend() {
    var b = ["html", "css", "js"];
    b.push("CMS");
    console.log(b);
}
frontend();  // (4) ["html", "css", "js", "CMS"]


// метод slice()
function slice() {
    var a = "Hello World";
    var b = a.slice(0, -6);
    console.log(b);
}
slice(); // Hello


// метод join()
function array() {
    var a = ["java", "script"];
    console.log(a.join("."));
}
array();  // java.script


// метод reverse()
function reverse() {
    var number = ["one","two","three"];
    number.reverse();
    console.log(number);
}
reverse(); // (3) ["three", "two", "one"]


/* 2. Оголосити масив для тестування методів ['a', 'b', 'c', 4, 5, 6] */



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
