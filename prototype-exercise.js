function ContentItem(name) {
	this.name = name;
}

ContentItem.prototype.test = function () {
	console.log("My name is " + this.name + " and this is a test of the ContentItem.prototype.test method");
};

FeatureContentItem.prototype = new ContentItem;
FeatureContentItem.prototype.constructor = FeatureContentItem;

function FeatureContentItem(name) {
	ContentItem.call(this, name);
}

FeatureContentItem.prototype.featureTest = function () {
	console.log("My name is " + this.name + " and this is a test of the FeatureContentItem.prototype.featureTest method");
};

var myContentItem = new ContentItem("myContentItem Test");
myContentItem.test();

var myFeatureContentItem = new FeatureContentItem("myFeatureContentItem Test");
myFeatureContentItem.test();
myFeatureContentItem.featureTest();


// stackoverflow
function Car(name){
    this.Name = name;
}

Car.prototype.Drive = function () {
    console.log("My name is " + this.Name + " and I'm driving. <br />");
}

SuperCar.prototype = new Car();
SuperCar.prototype.constructor = SuperCar;

function SuperCar(name){
    Car.call(this, name);
}

SuperCar.prototype.Fly = function () {
    console.log("My name is " + this.Name + " and I'm flying! <br />");
}

var myCar = new Car("Car");
myCar.Drive();

var mySuperCar = new SuperCar("SuperCar");
mySuperCar.Drive();
mySuperCar.Fly();



// ! MDN OOP JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

// define the Person Class
function Person(gender) {
  this.gender = gender;
}
Person.prototype.sayGender = function() {
  alert(this.gender);
};
Person.prototype.walk = function(){
  alert ('I am walking!');
};
Person.prototype.sayHello = function(){
  alert ('hello');
};

// clone method for sub-classes - BUT NOT NEEDED... so far (see: Eloquent JS, p115)
/*function clone(object) {
	function OneShotCon() {}
	OneShotCon.prototype = object;
	return new OneShotCon();
}*/

// define the Student class
function Student(gender)
  // Call the parent constructor
  Person.call(this, gender);
}

// inherit Person
Student.prototype = new Person();

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;
 
// replace the sayHello method
Student.prototype.sayHello = function() {
  alert('hi, I am a student');
};

var studentFemale = new Student("Female");
var studentMale = new Student("Male");




// Another car example

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getMake = function getMake() {
  return this.make;
};
Car.prototype.setName = function setName(name) {
  this.name = name;
};
Car.prototype.getName = function getName() {
  return this.name;
};

var myCar = new Car('Hyundai', 'Elentra', '2000');
myCar.setName('Otto');