// Validate the login credentials
function validateLogin() {
    const username = document.getElementById('username').value; // Get the username input value
    const password = document.getElementById('password').value; // Get the password input value
    
    if (username === 'qwerty' && password === 'yuiop') { // Check if credentials match
        window.location.href = 'content.html'; // Redirect to content page on success
    } else {
        alert('Incorrect Username or Password'); // Alert on incorrect credentials
    }
}

// Disable F12 (Developer Tools) and right-click context menu on the login page only
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') { // Check if F12 key is pressed
        event.preventDefault(); // Prevent default action
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent right-click context menu
});
