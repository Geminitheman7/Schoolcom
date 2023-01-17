function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "eagleadmin" && password === "adminsm417") {
    window.location.href = "success.html";
  } else {
    window.location.href = "fail.html";
  }
}
