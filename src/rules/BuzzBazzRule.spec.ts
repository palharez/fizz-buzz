import BuzzBazzRule from './BuzzBazzRule';

describe('BuzzBazzRule', () => {
  it('should return `BuzzBazz` for multiples of 5 and 7', () => {
    const rule = new BuzzBazzRule();
    expect(rule.matches(35)).toBe(true);
    expect(rule.matches(70)).toBe(true);
    expect(rule.matches(140)).toBe(true);
  });

  it('not should return `BuzzBazz` for non-multiples of 5 and 7', () => {
    const rule = new BuzzBazzRule();
    expect(rule.matches(1)).toBe(false);
    expect(rule.matches(2)).toBe(false);
    expect(rule.matches(3)).toBe(false);
  });
});
