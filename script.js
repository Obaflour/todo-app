// script.js

// Get the registration form element
const registrationForm = document.getElementById('registrationForm');

// Handle form submission
registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get user input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a user object
  const user = {
    username,
    email,
    password
  };

  try {
    // Send a POST request to the server with the user data
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    // Check if the registration was successful
    if (response.ok) {
      // Registration successful, redirect to login page or show success message
      window.location.href = '/login.html';
    } else {
      // Registration failed, display error message
      const error = await response.json();
      alert(error.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
