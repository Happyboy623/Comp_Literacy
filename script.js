//Nav-BAR



//Form validation
function validation() {
     var name = document.getElementById("name").value;
     var lname = document.getElementById("lname").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var comment = document.getElementById("comment").value;
     var error_message = document.getElementById("error_message");


     error_message.style.padding = "10px";

     if(name == ""){
         text = "Please Enter The Valid Name";
         error_message.innerHTML = text;
     }

     if(lname.length <5){
         text = "Please Enter The Valid Last Name";
         error_message.innerHTML = text;
     }

}

var form = document.getElementById("contactform");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    validation();
});



//      if(namesurname==null || namesurname=="") {
//          alert("Name & Surname can't be blank!");
//          return false;
//      }

//      if(email==null || email=="") {
//          alert("Email can't be blank!");
//          return false;
//      }

//      if(subject==null || subject=="") {
//          alert("Subject can't be blank!");
//          return false;
//      }

//      if(comment==null || comment=="") {
//          alert("Name & Surname can't be blank!");
//          return false;
//      }
//  }

// const namesurnameEl = document.querySelector('#namesurname');
// const emailEl = document.querySelector('#email');
// const subjectEl = document.querySelector('#subject');
// const commentEl = document.querySelector('#comment');

// const form = document.querySelector('#submit');

// form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

// });

// const isRequired = value => value === '' ? false : true;

// const isBetween = (length, min, max) => length < min || length > max ? false : true;

// const isEmailValid = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// };

// const showError = (input, message) => {
//     // get the form-field element
//     const query2 = input.parentElement;
//     // add the error class
//     query2.classList.remove('success');
//     query2.classList.add('error');

//     // show the error message
//     const error = formField.querySelector('small');
//     error.textContent = message;
// };

