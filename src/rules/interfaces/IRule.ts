export default interface IRule {
  matches(value: number): boolean;
  getReplacement(): string;
}
