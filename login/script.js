// Sign up function
function signUp() {
  const user = document.getElementById("newUsername").value;
  const pass = document.getElementById("newPassword").value;
  if (user && pass) {
    localStorage.setItem(user, pass);
    alert("Account created successfully!");
    window.location.href = "login.html";
  } else {
    alert("Please enter all fields.");
  }
}

// Login function
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const storedPass = localStorage.getItem(user);
  if (storedPass === pass) {
    alert("Login Successful!");
    // Redirect to home/dashboard if needed
  } else {
    alert("Invalid credentials.");
  }
}

// Reset password
function resetPassword() {
  const user = document.getElementById("forgotUsername").value;
  const newPass = document.getElementById("newPass").value;
  if (localStorage.getItem(user)) {
    localStorage.setItem(user, newPass);
    alert("Password reset successfully!");
    window.location.href = "login.html";
  } else {
    alert("Username not found.");
  }
}
