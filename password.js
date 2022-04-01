const otp = document.querySelector("#code1");
const error = document.querySelector("#error");

function validate() {
  console.log(otp);
  const email = document.querySelector("#email");

  if (email.value == "") {
    alert("Empty");
    return false;
  } else if (otp.value != "1234") {
    error.innerHTML = "Wrong code";
    return false;
  } else {
    return true;
  }
}

const startingMinutes = 1;
let time = startingMinutes * 60;

const timer = document.querySelector("#timer");
const email = document.querySelector("#email");
const code = document.querySelector("#code");
let seconds = 15;
let a = null;

function countdown() {
  if (seconds <= 0) {
    clearInterval((seconds = 0));
    timer.innerHTML = "0:00";
    code.innerHTML = "Resend Code";
  }
  timer.innerHTML = `0:${seconds}`;

  seconds -= 1;
}

function start() {
  if (email.value != "") {
    a = window.setInterval(countdown, 1000);
  }
}
