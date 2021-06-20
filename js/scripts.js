$(document).ready(function() {
  $("#survey").submit(function(e) {
    e.preventDefault();

    const hours = $("#hours").val();

    // Declare initial variables equal to zero 

    let javascriptScore = 0;
    let pythonScore = 0;
    let cSharpScore = 0;

    // Branching logic for hours id
   
    if (hours === "one") {
      javascriptScore += 1;
    } else if (hours === "two") {
      pythonScore += 1;
    } else if (hours === "three") {
      cSharpScore += 1;
    } 

    // Branching logic for months id

    if (months === "one") {
      javascriptScore += 1;
    } else if (months === "two") {
      pythonScore += 1;
    } else if (months === "three") {
      cSharpScore += 1;
    } 

    // Branching logic for experience id

    if (experience === "one") {
      javascriptScore += 1;
    } else if (experience === "two") {
      pythonScore += 1;
    } else if (experience === "three") {
      cSharpScore += 1;
    } 

    // Branching logic for reason id

    if (reason === "one") {
      javascriptScore += 1;
    } else if (reason === "two") {
      pythonScore += 1;
    } else if (reason === "three") {
      cSharpScore += 1;
    } 

    // Branching logic for pet id

    if (pet === "one") {
      javascriptScore += 1;
    } else if (pet === "two") {
      pythonScore += 1;
    } else if (pet === "three") {
      cSharpScore += 1;
    } 

    // Branching logic that provides language suggestion to user

    if (javascriptScore > pythonScore && javascriptScore > cSharpScore) {
      $("#suggested-language").text("You should learn JavaScript");
    } else if (pythonScore > javascriptScore && pythonScore > cSharpScore) {
      $("#suggested-language").text("You should learn Python");
    } else if (cSharpScore > javascriptScore && cSharpScore > pythonScore) {
      $("#suggested-language").text("You should learn C#");
    } else {
      $("#suggested-language").text("Hmm... Something is not adding up here. Don't forget to select an answer for each question!");
    }

    $("#output").show();
  });
});