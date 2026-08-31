// Authentication module
function authenticate(user, pass) {
  return validateCredentials(user, pass);
}
module.exports = { authenticate };
