var chocolateBars= ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(a,b){
  var chocolateBar =["snickers","hundred grand","kitkat", "skittles"];
  ["hershey",...chocolateBar,]
  return chocolateBar
}

function destructivelyAddElementToBeginningOfArray(a,b){
  var chocolate= ["snickers","hundred grand","kitkat"]
  chocolate.unshift("hershey")
  return chocolate;
}