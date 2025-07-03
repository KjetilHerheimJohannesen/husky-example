const { add } = require('./add');
describe('Testing math', () => {
  it('checks that 1 + 2 equals 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
