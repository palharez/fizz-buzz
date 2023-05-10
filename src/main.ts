import BazzRule from './rules/BazzRule';
import BuzzBazzRule from './rules/BuzzBazzRule';
import BuzzRule from './rules/BuzzRule';
import FizzBazzRule from './rules/FizzBazzRule';
import FizzBuzzBazzRule from './rules/FizzBuzzBazzRule';
import FizzBuzzRule from './rules/FizzBuzzRule';
import FizzRule from './rules/FizzRule';
import Validator from './validator';

const rules = [
  new FizzBuzzBazzRule(),
  new FizzBuzzRule(),
  new FizzBazzRule(),
  new BuzzBazzRule(),
  new FizzBazzRule(),
  new FizzRule(),
  new BuzzRule(),
  new BazzRule(),
];

const validator = new Validator(rules);
const list = validator.generateList(100);
console.log(list);
