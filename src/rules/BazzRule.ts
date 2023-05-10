import IRule from './interfaces/IRule';

export default class BazzRule implements IRule {
  matches(value: number): boolean {
    return value % 7 === 0;
  }

  getReplacement(): string {
    return 'Bazz';
  }
}
