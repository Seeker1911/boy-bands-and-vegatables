/****************Loop through the two arrays provided (bands and vegetables) and output each element in the arrays
into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)************/

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = 0;

// Keep track of which veggie we're on in the loop
var currentVeggie = 0;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
bandElement.innerHTML += "<ul>";
veggieElement.innerHTML += "<ul>";
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

    // Add the band names into the correct <div>
    currentBand = bands[loopTracker];

    // Add the veggie names into the correct <div>

    currentVeggie = vegetables[loopTracker];

    console.log("current:", bands[loopTracker]);
    console.log("current:", vegetables[loopTracker]);
    document.getElementById("boy-bands").innerHTML += "<li>" + bands[loopTracker] + " " + "</li>";
    document.getElementById("vegetables").innerHTML += "<li>" + vegetables[loopTracker] + " " + "</li>";
}

document.getElementById("boy-bands").innerHTML += "</ul>";
document.getElementById("vegetables").innerHTML += "</ul>";
