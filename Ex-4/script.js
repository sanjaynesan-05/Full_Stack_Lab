// script.js - JavaScript for Sign In & Sign Up Page

document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission handling
    const signinForm = document.querySelector('.signin-card');
    const signupForm = document.querySelector('.signup-card');

    // Sign In Form Handling
    const signinButton = document.querySelector('.btn-signin');
    signinButton.addEventListener('click', function(e) {
        e.preventDefault();
        const username = document.getElementById('signin-username').value.trim();
        const password = document.getElementById('signin-password').value.trim();

        if (validateSignIn(username, password)) {
            // Simulate successful sign in
            showMessage('Sign In successful! Welcome back.', 'success');
            // In a real app, this would send data to server
            console.log('Sign In:', { username, password });
        }
    });

    // Sign Up Form Handling
    const signupButton = document.querySelector('.btn-signup');
    signupButton.addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();

        if (validateSignUp(name, email, password)) {
            // Simulate successful sign up
            showMessage('Sign Up successful! Please check your email.', 'success');
            // In a real app, this would send data to server
            console.log('Sign Up:', { name, email, password });
        }
    });

    // Validation functions
    function validateSignIn(username, password) {
        if (!username) {
            showMessage('Please enter your username/email/phone.', 'error');
            return false;
        }
        if (!password) {
            showMessage('Please enter your password.', 'error');
            return false;
        }
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters.', 'error');
            return false;
        }
        return true;
    }

    function validateSignUp(name, email, password) {
        if (!name) {
            showMessage('Please enter your name.', 'error');
            return false;
        }
        if (!email) {
            showMessage('Please enter your email.', 'error');
            return false;
        }
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return false;
        }
        if (!password) {
            showMessage('Please enter a password.', 'error');
            return false;
        }
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters.', 'error');
            return false;
        }
        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show message function
    function showMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;

        // Style the message
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20px';
        messageDiv.style.right = '20px';
        messageDiv.style.padding = '15px 20px';
        messageDiv.style.borderRadius = '5px';
        messageDiv.style.color = 'white';
        messageDiv.style.fontWeight = 'bold';
        messageDiv.style.zIndex = '1000';
        messageDiv.style.maxWidth = '300px';

        if (type === 'success') {
            messageDiv.style.backgroundColor = '#28a745';
        } else {
            messageDiv.style.backgroundColor = '#dc3545';
        }

        // Add to body
        document.body.appendChild(messageDiv);

        // Remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }

    // Add show/hide password functionality
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        const container = input.parentElement;
        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.textContent = 'Show';
        toggleButton.style.position = 'absolute';
        toggleButton.style.right = '0';
        toggleButton.style.top = '50%';
        toggleButton.style.transform = 'translateY(-50%)';
        toggleButton.style.background = 'none';
        toggleButton.style.border = 'none';
        toggleButton.style.color = '#007bff';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.fontSize = '12px';

        container.style.position = 'relative';
        container.appendChild(toggleButton);

        toggleButton.addEventListener('click', function() {
            if (input.type === 'password') {
                input.type = 'text';
                toggleButton.textContent = 'Hide';
            } else {
                input.type = 'password';
                toggleButton.textContent = 'Show';
            }
        });
    });

    // Add keyboard navigation improvements
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const form = input.closest('.card');
                const button = form.querySelector('.btn');
                button.click();
            }
        });
    });
});