function perform() {
    this.param=arguments[1]();
    this.then = function (callback) {
    this.param = callback.call(null, this.param);
    return this;
  };
  return this;
}

perform(null, function(value) { // value === null
	var param = 1;
	console.log(param); // 1
	return param;
})
.then(function(param) { // param === 1
	console.log(++param); // 2
	return param;
})
.then(function(param) { // param === 2
	console.log(++param); // 3
	return param;
})
.then(function(param) { // param === 3
	console.log(++param); // 4
	return param;
})
.then(function(param) { // param === 4
	console.log(++param); // 5
	return param;
});

console.log("Good job!")