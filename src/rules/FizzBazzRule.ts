import IRule from './interfaces/IRule';

export default class FizzBazzRule implements IRule {
  matches(value: number): boolean {
    return value % 3 === 0 && value % 7 === 0;
  }

  getReplacement(): string {
    return 'FizzBazz';
  }
}
