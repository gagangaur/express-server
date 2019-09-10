// destructuring with string template literals ----------------

let [myname,friend_name] = ['alpha','beta','ceta','theta']
console.log(`my name is ${myname} and my friend name is ${friend_name}`);

// object literals and object destructuring----------------

function address(city,state){
  const my_address = {city,state};
  console.log(my_address);
}
address("mathura","uttar pradesh");

function addressmaker(newaddress){
  const {city,state} = newaddress;
  const new_address = {
    city,
    state,
    country : 'India'
  }
  console.log(new_address);
}
addressmaker({city:'mathura',state:'uttar pradesh'});


// for of loop -----------------------------------

values = [1,2,3,4,5];
totalSum = 0;
for(const val of values){
  totalSum += val;
}
console.log(totalSum);

// spread operator --------------------------

myArray = [1,2,3,4,5,6];
// newArray = myArray   "this is assignment through reference and change in any one will be reflected in another #shallow copy"
// depth copy
newArray = [...myArray] // in this new object is being created and assigned to newArray 
newArray.push(7);
console.log(myArray);
console.log(newArray);

// Rest operator -----------------------
function showRest(...values){
//apply ... before the passing argument to pass variable length arguments
  console.log(values);
}
showRest(1,2,3,4,5);



// CallBack Functions --------------------------------

let add = function(x,y){
  return x+y;
};

let multiply = function(x,y){
  return x*y;
};

let doWhatever = function(x,y){
  return `I can do do Whatever i want to do with my numbers ${x} and ${y} `;
}
function todo(x,y,CallBack){
  return CallBack(x,y);
}
console.log(todo(2,3,doWhatever));


// Closure (function inside another function) --------------------

function outer(){
  var outervari = "i am an outer variable";
  console.log(outervari);
  function inner(){
    var innervari = "i am an inner variable";
    console.log(innervari);
    console.log(outervari);
  }
  inner();
  console.log(outervari);
  // console.log(innervari);  will produce error
}
outer();


// Function Expression these are not hoisted unlike function declarations (#top me move nhi karta declarations ko )---

var display = function show(){
  console.log("Display the message here");
};
display();

