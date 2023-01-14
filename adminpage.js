function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username == "eagleadmin" && password == "adminsm417") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}
