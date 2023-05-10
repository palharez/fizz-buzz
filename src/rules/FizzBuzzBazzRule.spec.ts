import FizzBuzzBazzRule from './FizzBuzzBazzRule';

describe('FizzBuzzBazzRule', () => {
  it('should return `FizzBuzzBazz` for multiples of 3, 5 and 7', () => {
    const rule = new FizzBuzzBazzRule();
    expect(rule.matches(105)).toBe(true);
    expect(rule.matches(210)).toBe(true);
    expect(rule.matches(315)).toBe(true);
  });

  it('not should return `FizzBuzzBazz` for non-multiples of 3, 5 and 7', () => {
    const rule = new FizzBuzzBazzRule();
    expect(rule.matches(1)).toBe(false);
    expect(rule.matches(2)).toBe(false);
    expect(rule.matches(4)).toBe(false);
  });
});
