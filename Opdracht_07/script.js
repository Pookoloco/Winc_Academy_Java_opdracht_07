const paintWalls = function(){

      console.log("The wall has been painted red");

};

paintWalls()



const paintWalls = function(wallColour){

      console.log("The wall has been painted " + wallColour);

};

const wallColour =("yellow");

paintWalls("green");
paintWalls("blue");
paintWalls(wallColour)



// what happens if we call the function without an argument? Without an argument it will return "undefined"


const paintWalls = function(wallColour, wallLocation){

      console.log(wallLocation + " has been painted " + wallColour);
      
};

const wallColour = "grey";
const wallLocation = "The South Wall";

paintWalls("The South Wall" , "blue");
paintWalls(wallColour,wallLocation);
paintWalls(wallLocation,wallColour);

// does the order of the arguments matter when calling the function? Yes otherwise the outcome will be "colour has been painted " location"

// what happens if you switch them in the function definition? Same as above, location and colour get swapped around

// what happens if you change the order of the arguments in the function definition and when calling the function? After doing this the location and colour are back in the right place