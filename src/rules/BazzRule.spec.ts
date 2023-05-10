import BazzRule from './BazzRule';

describe('BazzRule', () => {
  it('should return `Bazz` for multiples of 7', () => {
    const rule = new BazzRule();
    expect(rule.matches(7)).toBe(true);
    expect(rule.matches(14)).toBe(true);
    expect(rule.matches(21)).toBe(true);
  });

  it('not should return `Bazz` for non-multiples of 7', () => {
    const rule = new BazzRule();
    expect(rule.matches(1)).toBe(false);
    expect(rule.matches(2)).toBe(false);
    expect(rule.matches(3)).toBe(false);
  });
});
