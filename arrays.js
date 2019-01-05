var chocolateBars= ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){
  [`${element}`,...`${array}`]
}

function destructivelyAddElementToBeginningOfArray(a,b){
  var chocolate= ["snickers","hundred grand","kitkat"]
  chocolate.unshift("hershey")
  return chocolate;
}