// Input validation helpers

function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function isNotEmpty(str) {
  return typeof str === "string" && str.trim().length > 0;
}

module.exports = { isEmail, isNotEmpty };
