const lifePhase = age =>{
if (age < 0){
    return 'This is not a valid age';}
  else if (age < 4){ 
  return 'baby';}
  else if (age < 13){
    return 'child';
  } else if (age < 20){
    return 'teen';
  } else if (age < 65){
    return 'adult';
  } else if (age < 140){
    return 'senior citizen';
  } else if (age < 0){
    return 'This is not a valid age';
  }
  else {
    return 'This is not a valid age';
  }

  }
console.log(lifePhase(-1))
