import {Student, Person} from '../src/data';
import greeter from '../src/greeter';

describe('Greeter', () => {

    it("should give appropriate message", () => {

        var user = new Student("Jane", "M.", "User");

        expect(greeter(user)).toBe('Hello, Jane USER');

    });
});