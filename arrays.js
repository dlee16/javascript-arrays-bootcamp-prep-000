var chocolateBars= ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){
  var arrays=[];
  arrays= [element, ...array]
  return arrays;
}

function destructivelyAddElementToBeginningOfArray(array,element){
 var arr =[];
 arr = arr.unshift(element); 
  return arr; 
}