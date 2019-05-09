let counter = 0;

function takeANumber (arr)
{
  // customer comes in, takes a number
  // increment number
  // sysstem reads welcome message
  counter++;
  arr.push(counter);
  return "Welcome, You are number " + counter;
}
// return Welcome. You are number: ?
/*
function takeANumber (arr, name)
{
  arr.push(name);
  var position = arr.indexOf(name, 0) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line."
}
*/

function nowServing (arr)
{
  if (arr === undefined || arr.length < 1)
  {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + arr.shift() + ".";
}

function currentLine (arr)
{
  if (arr === undefined || arr.length < 1)
  {
    return "The line is currently empty."
  }
  
  // ORIGINAL ARRAY IS BEING MUTATED  =BAD
  // Makes a copy of the array
  var newArr = [];
  var currentPosition = 1;
  for (let i = 0; i < arr.length; i++)
  {
    newArr[i] = currentPosition + ". " + arr[i];
    currentPosition++;
  }
  var s = newArr.join(", ");
  return "The line is currently: " + s;
}