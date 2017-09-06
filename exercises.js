//Do not change any of the function names


function multiplyByTen(num) {
  var multiply = num*10;
  return multiply;
}

multiplyByTen(2);


function subtractFive(num) {
  
    var sub = num -5;
    return sub;
}

subtractFive(10);

function areSameLength(str1, str2) {
    
    var x = str1.length;
    var y = str2.length;
    
    if(x==y){
        return true;
    }else{
        return false;
    }
  
}
areSameLength('mani', 'many');
areSameLength('mani', 'man');

function areEqual(x, y) {
    
    if(x===y){
        return true;
    }else{
        return false;
    }
}

areEqual(10, 10);
areEqual(10, 5);

function lessThanNinety(num) {
    
    if(num < 90){
        return true;
    }else{
        return false;
    }
  
}
lessThanNinety(90);
lessThanNinety(80);

function greaterThanFifty(num) {
    
     if(num > 50){
        return true;
    }else{
        return false;
    }
}
greaterThanFifty(90);
greaterThanFifty(10);

function add(x, y) {
  var sum = x+y;
    return sum;
}
add(5, 5);

function subtract(x, y) {
    var sub = x-y;
    return sub;
}
 subtract(2, 1);
 subtract(1,2);

function divide(x, y) {
  var div = x/y;
    return div;
}

divide(6,3);

function multiply(x, y) {
  
    var mul = x*y;
    return mul;
}
multiply(3,4);

function getRemainder(x, y) {
  
    var rem = x%y;
    return rem;
}

getRemainder(10,4);

function isEven(num) {
 if(num%2===0){
     return true;
 }else{
     return false;
 }
}

isEven(6);
isEven(7);

function isOdd(num) {
     if(num%2!==0){
     return true;
 }else{
    return false;
 }
}
isOdd(2);
isOdd(3);

function square(num) {
 
    var sq = num*num;
    return sq;
}
square(5);

function cube(num) {

     var cb = num*num*num;
    return cb;
}
cube(3);

function raiseToPower(num, exponent) {
   var result =1;
    for( var i=exponent; i>0; i-- ){
       result *= num;
       
    }
  return result;
}

raiseToPower(2,4);

function roundNumber(num) {
    
    return Number(num.toFixed(0));
  // round num and return it
  // code here
}
roundNumber(5.9);


function roundUp(num) {
   
    var result = Math.ceil(num);
      return result;
  // round num up and return it
  // code here
}
roundUp(3.17);

function addExclamationPoint(str) {
    
    var excl = str+'!';
    return excl;
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}
addExclamationPoint('sam');

function combineNames(firstName, lastName) {
    
    var fullName = firstName+' '+lastName;
    return fullName;
 
}
combineNames('hary', 'potter');

function getGreeting(name) {
    
    var greeting = 'Hello'+' '+name+'!';
    return greeting;
 
}
 getGreeting('Rider');

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  
    var rec = (length*width);
    return rec;
}
getRectangleArea(3,4);

function getTriangleArea(base, height) {
   var tri = (base*height)/2;
    return tri;
}

 getTriangleArea(3,5);
function getCircleArea(radius) {
    
    var circleRad = (22/7)*radius*radius;
    return Math.round(circleRad);
  // return the rounded area of the circle given the radius
  // code here
}
 getCircleArea(4);

function getRectangularPrismVolume(length, width, height) {
    
    var prismVol = length*width*height;
    return prismVol;
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
}

getRectangularPrismVolume(2,2,2);
// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
