const assert = require("assert");
const { add, sub, mul } = require("../src/calculatNum");

describe("add", function() {
  it("should return the addition of two number", function() {
    assert.deepEqual(add(2, 3), 5);
  });
  it("should return sub of two num",function(){
    assert.equal(sub(9,5),4);
  })
  it("should return mul of two number",function(){
    assert.equal(mul(5,2),10)
  })
});
