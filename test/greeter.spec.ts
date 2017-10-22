import {Student, Person} from '../src/data';
import greeter from '../src/greeter';
import {} from 'jasmine';

describe('Greeter', () => {
    it("should give appropriate message", () => {
        var user = new Student("Jane", "M.", "User");
        expect(greeter(user)).toBe('Hello, Jane USER');
    });
});

describe('Data Types', () => {
    it("strings", () => {
        const num = 37;
        let templateMultilineString: string = `Hello,
the number is ${ num + 1 }.
`;
        console.log(templateMultilineString);
    });
});

describe('Data Types', () => {
    it("strings", () => {
        console.log('TODO');

    });
});