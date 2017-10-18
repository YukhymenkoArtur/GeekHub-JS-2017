// метод pop
cars = ["bmw", "vw", "opel", "audi"];
a = cars.pop();
console.log (a);


// метод push
var cities = ["New-York", "London"];
cities.push ("Cherkassy");
console.log(cities);


// метод concat
var arr1 = ["a", "b", "c"];
var arr2 = arr1.concat ("d", "e", "f");
console.log(arr2);


// метод indexOf
cars = ["bmw", "vw", "opel"];
console.log(cars.indexOf("bmw"));
console.log(cars.indexOf("vw"));
console.log(cars.indexOf("opel"));
console.log(cars.indexOf("toyota"))


// метод join
var cities = ["New-York", "London", "Cherkassy", "Kyiv"];
var str = cities.join(';');
console.log( str );


// метод forEach
var cities = ["New-York", "London", "Cherkassy", "Kyiv"];
cities.forEach(function (item, i, cities) {
    console.log( i + ":" + item + "(массив:" + cities + ")");
}) ;


// метод filter
var number = [1, -3, 60, -100, 100, 200, -25];
var f = number.filter(function (number) {
    return number > 50;
});

console.log(f);

// метод find (розібрався і переробив)
var number = [1, -3, 60, -100, 100, 200, -25];
function chech(element) {
    return element > 20;
}
console.log(number.find(chech));

// метод map
var cities = ["New-York", "London", "Cherkassy", "Kyiv"];
var citiesLengths = cities.map(function(cities) {
    return cities.length;
});

console.log (citiesLengths);


// метод slice
var words = ["how", "to", "learn", "javascript", "?"];
var a = words.slice(2, 4);
console.log(a);


// метод splice (удаления двух элементов после элемента под номером 0)
var words = ["how", "to", "learn", "javascript"];
words.splice(0, 3);
console.log(words);


// метод splice (замена элементов, которые удалили)
var words = ["how", "to", "learn", "javascript"];
words.splice(0, 3, "так", "работает");
console.log(words);


// метод splice (вернуть удаленные элементы)
var cities = ["удаленные", "элементы", "вернули", "Cherkassy", "Kyiv"];
var remove = cities.splice(0, 3);
console.log(remove);


// метод splice (вставка без удаления)
var a = ["how", "to", "learn", "javascript"];
a.splice(2, 0, "easy");
console.log(a);


// метод shift
var cars = ["bmw", "vw", "opel", "audi"];
cars.shift();
console.log(cars);

// метод unshift
var a = ["html", "css", "js"]
a.unshift ("GeekHub");
console.log(a);
