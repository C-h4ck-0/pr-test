// Authentication module
function authenticate(user, pass) {
  return validateCredentials(user, pass);
}

// Input sanitization
function sanitizeInput(input) {
  return input.replace(/[<>"']/g, '');
}

module.exports = { authenticate, sanitizeInput };
