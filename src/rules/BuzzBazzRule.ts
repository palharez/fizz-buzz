import IRule from './interfaces/IRule';

export default class BuzzBazzRule implements IRule {
  matches(value: number): boolean {
    return value % 5 === 0 && value % 7 === 0;
  }

  getReplacement(): string {
    return 'BuzzBazz';
  }
}
