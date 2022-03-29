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
function validate() {
  if (email.value == "" || password.value == "") {
    alert("Empty");
    return false;
  } else {
    true;
  }
}
