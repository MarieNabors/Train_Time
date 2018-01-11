

$("#submit").on("click", function(event) {
  event.preventDefault();

  var newTrain = {
  name: text,
  destination: place,
  departure: leaveTime,
  // arrival: time,
};

//creating column element for new train name
  var trainName = $("<td>");
//grab new train name text input 
  var text = $("trainName").val();
//add text (new train name) to column element
  trainName.html(text);
  //appending column to new row
newTrain.append(trainName);


//creating column element for new train's destination
var newPlace = $("<td>");
//grab new place text input
var place =$("newPlace");
//add place to column element
newPlace.html(place);
//appending column to new row
newTrain.append(newPlace);

//----------------//

//create new column element for departure time
var newDeparture = $("<td>");
//grab new time text input
var leaveTime = $("newDeparture");
//add new departure time to column element
newDeparture.html(leaveTime);
//appending column to new row
newTrain.append(newDeparture);

//----------------//

var newArrival = $("<td>");



//appending row to page
$("#newRow").append(newTrain);


 var database = firebase.database();

  database.ref().push(addTrain);
});
    // // Time is 3:30 AM
    // var firstTime = "03:30";

    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "minutes");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  

//need code that updates the train list and submits the information to firebase //
// Uploads train info to the database
 // var database = firebase.database()

  //database.ref().push(addTrain);

//you need to write the code that gets the train records from firebase

 //review .push() method. 

 //review database.ref().set()