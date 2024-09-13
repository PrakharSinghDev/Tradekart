console.log("Login Page");
let isAuthenticated = false;
function getFormData() {
    return {
        username: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value
    };
}

function submit_handler(e) {
    e.preventDefault();  
    const { username, password } = getFormData();

    console.log("Username:", username);
    console.log("Password:", password);

    if (authorizeUser(username, password)) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}

function authorizeUser(username, password) {
    let data = JSON.parse(localStorage.getItem('UserData'));

    if (data) {
        localStorage.setItem("isAuthenticated", "true");
        if(isAuthenticated === false) {
            location.href = "signup.html";
        } else {
            location.href = "home.html";
        }
    }
}

document.getElementById('login_form').addEventListener('submit', submit_handler);
