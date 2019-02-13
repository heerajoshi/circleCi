const assert = require("assert");
const { add, sub, mul, Calculate } = require("../src/calculatNum");
const calculater = new Calculate();

describe("add", function() {
  it("should return the addition of two number", function() {
    assert.deepEqual(add(2, 3), 5);
  });
  it("should return sub of two num", function() {
    assert.equal(sub(9, 5), 4);
  });
  it("should return mul of two number", function() {
    assert.equal(mul(5, 2), 10);
  });
});

describe("calculater", function() {
  it("it should return the value after calculate the no accrodind to number", function() {
    assert.deepEqual(calculater.add(3, 5), 8);
  });
});
