console.log("Signup page");
let userData = [];

function getFormData() {
    return {
        username: document.getElementById('signup_username').value,
        email: document.getElementById('signup_email').value,
        password: document.getElementById('signup_password').value,
        confirm_password: document.getElementById('signup_confirm_password').value,
        photo: document.getElementById('signup_profile_photo').value
    };
}

function clearFormFields() {
    document.getElementById('signup_username').value = "";
    document.getElementById('signup_email').value = "";
    document.getElementById('signup_password').value = "";
    document.getElementById('signup_confirm_password').value = "";
    document.getElementById('signup_profile_photo').value = "";
}

function showPasswordError() {
    document.getElementById('signup_password').value = "";
    document.getElementById('signup_confirm_password').value = "";
    document.getElementById('error').innerHTML = "Password doesn't match";

    setTimeout(() => {
        document.getElementById('error').innerHTML = "";
    }, 3000);

    console.log("Password error");
}

function saveToLocalStorage(userData) {
    localStorage.setItem('UserData', JSON.stringify(userData));
    console.log('User data saved to localStorage:', userData);
}


function signup_handler(e) {
    e.preventDefault(); 

    const { username, email, password, confirm_password, photo } = getFormData();

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirm_password);
    console.log('Image:', photo);

    if (password !== confirm_password) {
        showPasswordError(); 
    } else {
        userData.push({
            username: username,
            email: email,
            password: password, 
            photo: photo
        });
        saveToLocalStorage(userData);
        clearFormFields();
        alert("Form submitted successfully and data saved to local storage!");
    }
}
