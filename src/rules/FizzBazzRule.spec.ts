import FizzBazzRule from './FizzBazzRule';

describe('FizzBazzRule', () => {
  it('should return `FizzBazz` for multiples of 3 and 7', () => {
    const rule = new FizzBazzRule();
    expect(rule.matches(21)).toBe(true);
    expect(rule.matches(42)).toBe(true);
    expect(rule.matches(84)).toBe(true);
  });

  it('not should return `FizzBazz` for non-multiples of 3 and 7', () => {
    const rule = new FizzBazzRule();
    expect(rule.matches(1)).toBe(false);
    expect(rule.matches(2)).toBe(false);
    expect(rule.matches(4)).toBe(false);
  });
});
