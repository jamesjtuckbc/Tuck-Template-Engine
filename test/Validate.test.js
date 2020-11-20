const Validate = require("../lib/Validate");

test("Is id valid", () => {
    const testId = 123456;
    const v = Validate.valId(testId)
    expect(v).toBe(true);
});

test("is id invalid?", () => {
    const testId = 'Jorgen123';
    const v = Validate.valId(testId)
    expect(v).toBe(false);
});

test("Is name valid", () => {
    const testName = 'James-Jorgen Tuck';
    const v = Validate.valName(testName)
    expect(v).toBe(true);
});

test("is name invalid?", () => {
    const testName = 'Jorgen123';
    const v = Validate.valName(testName)
    expect(v).toBe(false);
});

test("Is email valid", () => {
    const testEmail = 'JamesJTuck@gmail.com';
    const v = Validate.valEmail(testEmail)
    expect(v).toBe(true);
});

test("is email invalid?", () => {
    const testEmail = 'Jorgen123';
    const v = Validate.valEmail(testEmail)
    expect(v).toBe(false);
});

test("Is office number valid", () => {
    const testOffNum = '(123) 268-4567';
    const v = Validate.valOffNum(testOffNum)
    expect(v).toBe(true);
});

test("is office number invalid?", () => {
    const testOffNum = '(801)jhf';
    const v = Validate.valOffNum(testOffNum)
    expect(v).toBe(false);
});