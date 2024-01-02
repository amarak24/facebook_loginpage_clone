var em = document.forms["form1"]["email"];
var pass = document.forms["form1"]["password"];

var err_email = document.getElementById("err_email");
var err_pass = document.getElementById("err_pass");

function validate() {
  if (em.value.length < 9) {
    err_email.style.display = "block";

    return false;
  } else if (pass.value.length < 9) {
    err_pass.style.display = "block";

    return false;
  } else {
    true;
  }
}
