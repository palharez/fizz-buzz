import IRule from './interfaces/IRule';

export default class FizzBuzzRule implements IRule {
  matches(value: number): boolean {
    return value % 3 === 0 && value % 5 === 0;
  }

  getReplacement(): string {
    return 'FizzBuzz';
  }
}
