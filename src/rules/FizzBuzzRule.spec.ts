import FizzBuzzRule from './FizzBuzzRule';

describe('FizzBuzzRule', () => {
  it('should return `FizzBuzz` for multiples of 3 and 5', () => {
    const rule = new FizzBuzzRule();
    expect(rule.matches(15)).toBe(true);
    expect(rule.matches(30)).toBe(true);
    expect(rule.matches(60)).toBe(true);
  });

  it('not should return `FizzBuzz` for non-multiples of 3 and 5', () => {
    const rule = new FizzBuzzRule();
    expect(rule.matches(1)).toBe(false);
    expect(rule.matches(2)).toBe(false);
    expect(rule.matches(4)).toBe(false);
  });
});
