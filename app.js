console.log('connected');
let users = []
const submittedEmails = [];


function register() {

    
    // get the values of the input fields
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var age = document.querySelector("#age").value;
   
      
    const examCenters = ["Mumbai", "Pune", "Gujarat", "Kolkata", "Nagpur", "New Mumbai"];
    const randomIndex = Math.floor(Math.random() * examCenters.length);
    const randomExamCenter = examCenters[randomIndex];
    var center = document.querySelector("#examCenter").value = randomExamCenter;

    // validate the data
    if (!name || !email || !age) {
      displayError("Please fill out all the fields");
      return;
    }
  
    if (age < 18 || age > 24) {
        displayError("You are not eligible for the exam.");
        return;
      }

      if (submittedEmails.includes(email)) {
        displayError("This email has already been used.");
        return;
      }
    
      submittedEmails.push(email);


      nameField.innerHTML = "Name: " + name;
      emailField.innerHTML = "Email: " + email;
      ageField.innerHTML = "Age: " + age;
      centerField.innerHTML = "Exam Center: " + center;
  
      if (age >= 18 && age <= 24) {
        displaySuccess("Registration Successful!");
      }

  }
  

  function displayError(message) {
     var alertDiv = document.querySelector("#alert");
     alertDiv.innerHTML = message;
     alertDiv.classList.remove("d-none");
     alertDiv.classList.add("alert-danger","fade-in-out");
     setTimeout(function(){
        alertDiv.classList.add("d-none");
     }, 2000);
 }
  
  function displaySuccess(message) {
    var centerDisplay = document.querySelector("#centerDisplay");
    centerDisplay.innerHTML = message;
    centerDisplay.classList.remove("d-none");
    centerDisplay.classList.add("alert-success","fade-in-out");
    setTimeout(function() {
        centerDisplay.classList.add("d-none");
      }, 2000);
  
  }
  

 const usersInfo = document.querySelector(".users-info");

 const nameField = usersInfo.querySelector(".name");
 const emailField = usersInfo.querySelector(".email");
 const ageField = usersInfo.querySelector(".age");
 const centerField = usersInfo.querySelector(".center");

 const name = document.querySelector("#name").value;
 const email = document.querySelector("#email").value;
 const age = document.querySelector("#age").value;
 const center = document.querySelector("#examCenter").value;

