function loginAdmin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Example hardcoded credentials
  if (user === "admin" && pass === "1234") {
    alert("Login Successful!");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid Credentials. Try again.");
  }
}
