function add(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };

// Production webhook smoke test
function multiply(a, b) {
  return a + b; // Intentional bug: should multiply, not add
}
