function myFunction () {
var vacationType = prompt ("What type of vacation would you like to go on? Musical, Tropical, or Adventurous?"); 

if (vacationType == "Adventurous") {
    var groupSize = prompt ("How many people are in your group?"); 

if (groupSize <=5) { 
    console.log ("Since you're in a mid-sized group, you take a helicopter for an adventurous vacation to go white water rafting in the Grand Canyon!");
}
else if (groupSize >=6) 
    console.log ("Since you're in a large group, you should take a charter flight for an adventurous vacation to go white water rafting in the Grand Canyion!");
}

if (vacationType == "Tropical") {
    var groupSize = prompt ("How many people are in your group?"); 

if (groupSize <=3) { 
    console.log ("Since you're in a personal group, you should take a first class flight for a tropical vacation to a beach vacation in Mexico!")
}
else if (groupSize >=6) 
    console.log ("Since you're in a large group, you should take a charter flight for a tropical vacation to a beach vacation in Mexico!");
}

if (vacationType == "Musical") {
    var groupSize = prompt ("How many people are in your group?"); 

if (groupSize <=2) { 
    console.log ("Since you're in a personal group, you should take a first class flight for a musical vacation in New Orleans!")
}
else if (groupSize >=3 && groupSize <=5) 
    console.log ("Since you're in a small group, you should take a charter flight for a musical vacation in New Orleans!");
}

}