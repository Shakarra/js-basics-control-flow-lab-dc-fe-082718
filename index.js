// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result;
  if (someValue < 400) {
    result = 'This one is on me!';
  } else if (someValue > 2000 && someValue < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500){
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity (NYC) {
 return (NYC) ? "Ok, sounds good.":"No go.";
}
  
  /*let tip;
  switch(switchOnCharmFromTip) {
    case "generous": 
    generous = "Thank you so much.";
    break;
    
    case "not generous": 
    not generous: "Thank you.";
    break;
  }*/