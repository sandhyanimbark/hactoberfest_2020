/**
 * Function to populate values in card from form input
 */
function generateCard() {
    // Get value of Student name from form input 
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value; 
    // Assign the value of student name to generated card
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    // Get value of college name from form input 
    const collegeNameValue = document.getElementById("collegeName").value;
    // Assign the value of college name to generated card
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    // Get value of location name from form input 
    const locationValue = document.getElementById("location").value;
    // Assign the value of location name to generated card
    document.getElementById("cardLocation").innerHTML = locationValue;
   
    // Get value of location name from form input 
     const addressValue = document.getElementById("Address").value;
     // Assign the value of location name to generated card
     document.getElementById("cardAddress").innerHTML = addressValue;
      // Get value of location name from form input 
    const numberValue = document.getElementById("Number").value;
    // Assign the value of location name to generated card
    document.getElementById("cardNumber").innerHTML = numberValue;
    
    // Display final generated card to user     
    document.getElementById("collegeCard").style.display = "block";

}
