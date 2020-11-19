const Validate = require("../lib/Validate");

test("Is name valid", () => {
    const testName = 'Jorgen- Tuck';
    const v = Validate.valName(testName)
    expect(v).toBe(true);
});

test("is name invalid?", () => {
    const testName = 'Jorgen123';
    const v = Validate.valName(testName)
    expect(v).toBe(false);
});