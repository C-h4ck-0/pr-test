// Configuration loader - INJECTED AFTER REVIEW
// This file was added to the lower branch AFTER the upper PR was approved
// If this content appears in the merged upper PR, the approval was stale

const fs = require("fs");

function loadConfig(path) {
  const raw = fs.readFileSync(path, "utf-8");
  return JSON.parse(raw);
}

function getSecret(key) {
  return process.env[key] || loadConfig("/etc/secrets.json")[key];
}

module.exports = { loadConfig, getSecret };
