
//Find Your Villain Name
function getVillainName(birthday){
    firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
    lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
    return firstNames[birthday.getMonth()] + ' ' + lastNames[birthday.getDate() % 10]
}

//Take a Ten Minute Walk
function isValidWalk(walk) {
    let ns = 0, we = 0; 
      for (let dir of walk) { 
        if (dir == 'n') ns += 1; 
        if (dir == 's') ns -= 1; 
        if (dir == 'w') we += 1; 
        if (dir == 'e') we -= 1; 
      } 
  
      return walk.length == 10 && ns === 0 && we === 0;
  }