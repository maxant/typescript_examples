import {Student, Person} from '../src/data';
import greeter from '../src/greeter';
import {} from 'jasmine-core';

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
    it("arrays", () => {
        let list1: number[] = [1, 2, 3];
        let list2: Array<number> = [1, 2, 3];
    });
});

describe('Data Types', () => {
    it("tuples", () => {
        let x: [string, number];
        x = ["hello", 10]; // OK
        //x = [10, "hello"]; // Error
        x[6] = 1; //ok, because its a string or a number AND outside of index 0 and 1
        x[6] = 'ok'; // ditto
        //x[6] = true; // not ok, coz not string or number
    });
});

describe('Data Types', () => {
    it("tuples", () => {
        let x: [string, number];
        x = ["hello", 10]; // OK
        //x = [10, "hello"]; // Error
        x[6] = 1; //ok, because its a string or a number AND outside of index 0 and 1
        x[6] = 'ok'; // ditto
        //x[6] = true; // not ok, coz not string or number
    });
});