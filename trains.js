

$("#submit").on("click", function(event) {
  event.preventDefault();

  var newTrain = {
  name: text,
  destination: place,
  departure: leaveTime,
  // arrival: time,
};
var newTableRow = $("<tr>");

//creating column element for new train name
  var trainName = $("<td>");
//grab new train name text input 
  var text = $("#trainName").val();
//add text (new train name) to column element
  trainName.html(text);
  //appending column to new row
newTableRow.append(trainName);


//creating column element for new train's destination
var newPlace = $("<td>");
//grab new place text input
var place =$("#newPlace").val();
//add place to column element
newPlace.html(place);
//appending column to new row
newTableRow.append(newPlace);

//----------------//

//create new column element for departure time
var newDeparture = $("<td>");
//grab new time text input
var leaveTime = $("#newDeparture").val();
//add new departure time to column element
newDeparture.html(leaveTime);
//appending column to new row
newTableRow.append(newDeparture);

//----------------//

var newArrival = $("<td>");

$("#tableBody").append(newTableRow);


//appending row to page
$("#newRow").append(newTrain);


 var database = firebase.database();

  database.ref().push(addTrain);
});


  

//need code that updates the train table and submits the information to firebase //
// Uploads train info to the database
 // var database = firebase.database()

  //database.ref().push(addTrain);

//you need to write the code that gets the train records from firebase

 //review .push() method. 

 //review database.ref().set()