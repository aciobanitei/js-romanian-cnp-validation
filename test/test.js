const assert = require("assert");
const validcnp = require("../lib/index").validcnp;

describe("js-cnp-validation", () => {
  describe("#cnpvalidation", () => {
    it("valid CNP test - 1721004437817", () => {
      assert.strictEqual(validcnp("1721004437817"), true);
    });
    console.log("CNP VALID  " + validcnp("1721004437817"));
    it("invalid CNP test - 1721004437818", () => {
      assert.strictEqual(validcnp("1721004437818"), false);
    });
    console.log(
      "CNP NEVALID - CIFRA CONTROL INCORECTA" + validcnp("1721004437818")
    );
    it("invalid CNP test - 1800224483725", () => {
      assert.strictEqual(validcnp("1800224483725"), false);
    });
    console.log(
      "CNP NEVALID - CIFRA CONTROL INCORECTA ÎNSĂ SECTOR 8 E DESFIINTAT DIN 19.12.1978 " +
        validcnp("1800224483725")
    );
  });
});
