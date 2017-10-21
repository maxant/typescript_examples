import * as _ from 'lodash';

import {Student, Person} from './data';

export default function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + _.toUpper(person.lastName);
}




