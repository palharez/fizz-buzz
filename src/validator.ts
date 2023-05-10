import IRule from './rules/interfaces/IRule';

export default class Validator {
  constructor(private rules: IRule[]) {}

  generateList(max: number): string[] {
    const list: string[] = [];

    for (let i = 1; i <= max; i++) {
      list.push(this.validate(i));
    }

    return list;
  }

  validate(value: number): string {
    for (const rule of this.rules) {
      if (rule.matches(value)) {
        return rule.getReplacement();
      }
    }

    return value.toString();
  }
}
