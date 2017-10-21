import * as _ from 'lodash';

import {Student, Person} from './data';

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + _.toUpper(person.lastName);
}

var user = new Student("Jane", "M.", "User");

console.log(greeter(user));



