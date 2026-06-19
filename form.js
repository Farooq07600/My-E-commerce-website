// =========================================================================
// PREMIUM ENTERPRISE FORM SECURITY & VERIFICATION ENGINE v3.0
// =========================================================================

// DOM Elements
const submitBtn = document.getElementById('submit');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

// Brute Force Guard Metrics
let loginAttempts = 0;
const MAX_ATTEMPTS = 5;
let isLockedOut = false;
let lockoutTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    setupPasswordVisibilityToggle();
    
    if (submitBtn) {
        submitBtn.addEventListener("click", handleSecureLoginSubmission);
    }

    // Clear errors on input matrix
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('password');
    
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            if (emailError) emailError.textContent = '';
        });
    }
    
    if (passInput) {
        passInput.addEventListener('input', () => {
            if (passError) passError.textContent = '';
        });
    }
});

// Security Shield Input Sanitization (Anti-XSS Engine)
function sanitizeInput(str) {
    if (!str) return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    return String(str).trim().replace(/[&<>"'`=/]/g, function(s) {
        return map[s];
    });
}

// Password Visibility Dynamic Injection
function setupPasswordVisibilityToggle() {
    const passContainer = document.getElementById('password');
    if (!passContainer) return;

    const parentNode = passContainer.parentElement;
    if (parentNode.querySelector('.premium-toggle-icon')) return;

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'premium-toggle-icon';
    toggleIcon.innerHTML = '👁️';
    toggleIcon.setAttribute('role', 'button');
    toggleIcon.setAttribute('aria-label', 'Toggle password visibility');
    toggleIcon.style.cssText = `
        position: absolute;
        right: 1.2rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        user-select: none;
        z-index: 10;
    `;
    
    parentNode.style.position = 'relative';
    parentNode.appendChild(toggleIcon);

    toggleIcon.addEventListener('click', () => {
        const isPassword = passContainer.type === 'password';
        passContainer.type = isPassword ? 'text' : 'password';
        toggleIcon.innerHTML = isPassword ? '🙈' : '👁️';
    });
}

// ============================================================
// 🆕 USER AUTHENTICATION SYSTEM - COMPLETE
// ============================================================

// Get all users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Save users to localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Get current logged in user
function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Set current user
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Clear current user (logout)
function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

// ============================================================
// FORM SUBMISSION HANDLER - UPDATED
// ============================================================

function handleSecureLoginSubmission(e) {
    e.preventDefault();

    if (isLockedOut) {
        alert("Security Lockdown: Too many failed login attempts.");
        return;
    }

    const isEmailValid = validateSecureEmail();
    const isPasswordValid = validateSecurePassword();

    if (!isEmailValid || !isPasswordValid) {
        loginAttempts++;
        triggerBruteForceAnalysis();
        return;
    }

    loginAttempts = 0;

    // Get values
    const emailValue = document.getElementById('email').value.trim();
    const passwordValue = document.getElementById('password').value;

    // ============================================================
    // 🆕 USER LOGIN/REGISTER LOGIC
    // ============================================================
    
    let users = getUsers();
    
    // Check if user exists
    let foundUser = users.find(u => u.email.toLowerCase() === emailValue.toLowerCase());
    
    if (foundUser) {
        // ✅ User exists - Login
        // Check password (in production, use hashed passwords!)
        if (foundUser.password !== passwordValue) {
            if (passError) passError.textContent = "Invalid password. Please try again.";
            loginAttempts++;
            triggerBruteForceAnalysis();
            return;
        }
        
        // ✅ Login successful
        setCurrentUser(foundUser);
        
    } else {
        // 🆕 New user - Register
        const newUser = {
            id: Date.now(),
            email: emailValue,
            password: passwordValue, // In production: hash this!
            cart: [],
            orders: [],
            wishlist: [],
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        saveUsers(users);
        setCurrentUser(newUser);
    }

    // ✅ Redirect to main page
    window.location.href = './index.html';
}

function validateSecureEmail() {
    const emailElement = document.getElementById('email');
    if (!emailElement) return true;

    const cleanEmail = sanitizeInput(emailElement.value);

    if (cleanEmail.length === 0) {
        if (emailError) emailError.textContent = "Email address is required.";
        return false;
    }
    if (cleanEmail.length > 80) {
        if (emailError) emailError.textContent = "Security Risk: Length limit exceeded.";
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
        if (emailError) emailError.textContent = "Please enter a valid business email.";
        return false;
    }

    if (emailError) emailError.textContent = "";
    return true;
}

function validateSecurePassword() {
    const passElement = document.getElementById('password');
    if (!passElement) return true;

    const password = passElement.value;

    if (password.length === 0) {
        if (passError) passError.textContent = "Secure password string token is required.";
        return false;
    }
    if (password.length < 8 || password.length > 32) {
        if (passError) passError.textContent = "Password must be between 8 and 32 characters.";
        return false;
    }

    const containsUpper = /[A-Z]/.test(password);
    const containsLower = /[a-z]/.test(password);
    const containsDigit = /[0-9]/.test(password);
    const containsSpecial = /[^A-Za-z0-9]/.test(password);

    if (!containsUpper || !containsLower || !containsDigit || !containsSpecial) {
        if (passError) passError.textContent = "Must contain 1 Uppercase, 1 Lowercase, 1 Digit, and 1 Special Character.";
        return false;
    }

    if (passError) passError.textContent = "";
    return true;
}

function triggerBruteForceAnalysis() {
    if (loginAttempts >= MAX_ATTEMPTS) {
        isLockedOut = true;
        if (submitBtn) submitBtn.disabled = true;
        if (passError) passError.textContent = "Please try again after 30 seconds.";

        lockoutTimer = setTimeout(() => {
            isLockedOut = false;
            loginAttempts = 0;
            if (submitBtn) submitBtn.disabled = false;
            if (passError) passError.textContent = "";
        }, 30000);
    }
}

// Prevent right-click context menu on fields
document.addEventListener('contextmenu', (e) => {
    if (e.target.id === 'password' || e.target.id === 'email') {
        e.preventDefault();
        return false;
    }
});

// Prevent copy-paste manipulation block
document.addEventListener('paste', (e) => {
    if (e.target.id === 'password') {
        e.preventDefault();
        if (passError) {
            passError.textContent = "Paste operation is not allowed for security reasons.";
        }
    }
});