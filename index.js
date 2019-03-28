/*
var katzDeliLine = [];


function takeANumber(line, name)
{
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line)
{
  if(line.length == 0)
  {
    return "There is nobody waiting to be served!";
  }
  else if(line.length > 0)
  {
    var current = line[0];
    line.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(line)
{
  if(line.length == 0)
  {
    return "The line is currently empty."
  }
  
  else{
    var s = "The line is currently: "
    for(let i = 0; i < line.length; i++)
    {
      s += `${i + 1}. ${line[i]}`
      if(i != line.length - 1)
      s += ", "
    }
    return s;
  } 
    
}
*/
// redone for practice
var katzDeliLine = [];

function takeANumber(line , name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var c = `Currently serving ${line[0]}.`
    line.shift();
    return c;
  }
}

function currentLine(line){
  if(line.length === 0)
    return "The line is currently empty."
  else{
    var c = "The line is currently: "
    for(let i = 0; i < line.length; i++)
    {
      c += `${i + 1}. ${line[i]}`
      if(i !== line.length - 1){
        c += ", ";
      }
    }
    return c;
  }
}


var newArray = [];
var count = 1;  //count of overall tickets
function lineCounter(line)  // pass in newArray[]
{
  count++;
  newArray.push(count); // pushes the current count
  
}


