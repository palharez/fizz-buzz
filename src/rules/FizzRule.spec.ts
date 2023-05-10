import FizzRule from './FizzRule';

describe('FizzRule', () => {
  it('should return `Fizz` for multiples of 3', () => {
    const rule = new FizzRule();
    expect(rule.matches(3)).toBe(true);
    expect(rule.matches(6)).toBe(true);
    expect(rule.matches(9)).toBe(true);
  });

  it('not should return `Fizz` for non-multiples of 3', () => {
    const rule = new FizzRule();
    expect(rule.matches(1)).toBe(false);
    expect(rule.matches(2)).toBe(false);
    expect(rule.matches(4)).toBe(false);
  });
});
