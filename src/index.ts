import {Student, Person} from './data';
import greeter from './greeter';

var user = new Student("Jane", "M.", "User");

console.log(greeter(user));
