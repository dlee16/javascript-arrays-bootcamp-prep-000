var chocolateBars= ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(a,b){
  var array = [];
  ["c",...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(a,b){
  var chocolate= ["snickers","hundred grand","kitkat"]
  chocolate.unshift("hershey")
  return chocolate;
}