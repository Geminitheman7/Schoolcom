function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "eagleadmin" && password === "adminsm417") {
    var error = document.getElementById("error");
    error.innerHTML = "Successful Login";
  } else {
    var error = document.getElementById("error");
    error.innerHTML = "Invalid username or password. Please try again.";
  }
}
