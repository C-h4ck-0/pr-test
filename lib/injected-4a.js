// INJECTED v4a: require_last_push_approval test
// This content was added AFTER Nir212 approved the upper PR
function backdoor() { return process.env.SECRET; }
module.exports = { backdoor };
