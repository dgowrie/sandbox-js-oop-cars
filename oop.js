var Vehicle = function () {
	this.numWheels = '';
	this.hasEngine = true;
}

var Car = new Vehicle();

console.log(Car);

//
Vehicle.prototype.hasDoors = true;
Vehicle.prototype.numDoors = null;

console.log('Does Car have doors? ' + Car.hasDoors)
console.log('Vehicle number of doors: ' + Vehicle.numDoors);
console.log('Vehicle.prototype number of doors: ' + Vehicle.prototype.numDoors);
console.log('Car number of doors: ' + Car.numDoors);

Car.numDoors = '4';
console.log('Car number of doors: ' + Car.numDoors);




/*

API

	init:
		- call API for first batch of content
		- wire up event handlers to call in additional content, lazy load?

	build:
		- 

TIMELINE

	init: 
		- 
