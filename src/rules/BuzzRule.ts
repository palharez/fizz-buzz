import IRule from './interfaces/IRule';

export default class BuzzRule implements IRule {
  matches(value: number): boolean {
    return value % 5 === 0;
  }

  getReplacement(): string {
    return 'Buzz';
  }
}
