// code your solution here
 

function saturdayFun(msg = 'roller-skate'){
    
    return `This Saturday, I want to ${msg}!`;
 }


 const mondayWork = function(msg2='go to the office'){
    return `This Monday, I will ${msg2}.`;
 }
 

function wrapAdjective(visualFlair = "*") {
    
  return function (adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  };
const encouragingPromptFunction = wrapAdjective("!!!");
}
