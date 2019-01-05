var chocolateBars= ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(a,b){
  [a,...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(a,b){
  var chocolate= ["snickers","hundred grand","kitkat"]
  chocolate.unshift("hershey")
  return chocolate;
}