const add = function(a, b) {
  return a + b;
};

const sub = function(a, b) {
  return a - b;
};

const mul = function(a, b) {
  return a * b;
};

class Calculate {
  constructor() {}
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
}

module.exports = { add, sub, mul , Calculate};
