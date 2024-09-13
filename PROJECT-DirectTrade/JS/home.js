console.log("home Page");

function logout_handler() {
    localStorage.setItem('isAuthenticated', 'false');
    location.href = "login.html";
}