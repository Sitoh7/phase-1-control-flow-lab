function scuberGreetingForFeet(x){
  // Write your code here!
  if(x <= 400){
    return "This one is on me!";
  }
 else if ( x>400 && x<2000){
  return "That will be twenty bucks.";
 }

else if (x>2000 && x<2500 ){
  return "I will gladly take your thirty bucks.";
}

else if (x > 2500){
  return "No can do.";
}

}

function ternaryCheckCity(y){
  // Write your code here!

 if( y == 'NYC'){
  return "Ok, sounds good.";
 }

else{
  return "No go.";
}


}

function switchOnCharmFromTip(x){
  // Write your code here!

  if(x == "generous"){
    return "Thank you so much.";
  }
  else if(x == "not as generous"){
    return "Thank you.";
  }
  else{
    return "Bye.";
  }
}