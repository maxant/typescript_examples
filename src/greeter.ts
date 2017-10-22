import * as _ from 'lodash';

import {Student, Person} from './data';

export default function greeter(person : Person) {
    let a = false;
    if(a){
        return ""; //testing coverage
    }
    return "Hello, " + person.firstName + " " + _.toUpper(person.lastName);
}
