const form = document.getElementById("form");
const Name = document.getElementById("Name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const msg = document.getElementById("msg");

form.addEventListener("click", (e) => {
 if(checkInputs())
 {
   e.preventDefault();
}
});

function checkInputs(){
  //get values from input
  const nameValue = Name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const msgValue = msg.value.trim();

  if (nameValue === "") {
    setErrorFor(Name, "Name cannot be blank");
  } 

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  }else if (!isEmail(emailValue)){
    setErrorFor(email,'Email is not valid')
  }
   
  if (subjectValue === "") {
    setErrorFor(subject, "Subject cannot be blank");
  } 

  if (msgValue === "") {
    setErrorFor(msg, "Message cannot be blank");
    return document.querySelector('textarea').style.borderColor='#e74c3c';
  }
}

function setErrorFor(input, message) {
  const control = input.parentElement;
  const small = control.querySelector("small");

  control.className = "control error";
  small.innerText = message;
}


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

///////////////////////////////

const hamburger = document.querySelector('.hamb');
const nav = document.querySelector('.nav2');

hamburger.addEventListener('click', function() {
    this.classList.toggle('click');
    nav.classList.toggle('open');
  });

////////////////////////////

