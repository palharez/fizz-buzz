import BuzzRule from './BuzzRule';

describe('BuzzRule', () => {
  it('should return `Buzz` for multiples of 5', () => {
    const rule = new BuzzRule();
    expect(rule.matches(5)).toBe(true);
    expect(rule.matches(10)).toBe(true);
    expect(rule.matches(20)).toBe(true);
  });

  it('not should return `Buzz` for non-multiples of 5', () => {
    const rule = new BuzzRule();
    expect(rule.matches(1)).toBe(false);
    expect(rule.matches(2)).toBe(false);
    expect(rule.matches(3)).toBe(false);
  });
});
