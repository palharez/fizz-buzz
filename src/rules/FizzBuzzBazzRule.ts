import IRule from './interfaces/IRule';

export default class FizzBuzzBazzRule implements IRule {
  matches(value: number): boolean {
    return value % 3 === 0 && value % 5 === 0 && value % 7 === 0;
  }

  getReplacement(): string {
    return 'FizzBuzzBazz';
  }
}
