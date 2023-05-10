import IRule from './interfaces/IRule';

export default class FizzRule implements IRule {
  matches(value: number): boolean {
    return value % 3 === 0;
  }

  getReplacement(): string {
    return 'Fizz';
  }
}
