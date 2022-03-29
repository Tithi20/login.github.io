function switchForm(className, e) {
  e.preventDefault();
  const allForm = document.querySelectorAll("form");
  const form = document.querySelector(`form.${className}`);

  allForm.forEach((item) => {
    item.classList.remove("active");
  });
  form.classList.add("active");
}

const registerPassword = document.querySelector("form.register #password");
const registerConfirmPassword = document.querySelector(
  "form.register #confirm-password"
);

registerPassword.addEventListener("input", function () {
  registerConfirmPassword.pattern = `${this.value}`;
});

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const tenth = document.querySelector("#tenth");
const form_id = document.querySelector("#form_id");
function validate() {
  if (email.value == "" || password.value == "") {
    alert("Empty");
    return false;
  } else {;
    true;
  }
}

//Sign up page

const email1 = document.querySelector(".email");
const password1 = document.querySelector(".password");
const confirm_password = document.querySelector("#confirm-password");

function validate1() {
  if (email1.value == "" || password1.value == "") {
    alert("Empty");
    return false;
  } else if (password1.value != confirm_password.value) {
    alert("Wrong password");
    return false;
  } else {
    true;
  }
}
