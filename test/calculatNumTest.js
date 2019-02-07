const assert = require("assert");
const { add, sub, mul } = require("../src/calculatNum");

describe("add", function() {
  it("should return the addition of two number", function() {
    assert.deepEqual(add(2, 3), 5);
  });
});
