import {Student, Person} from '../src/data';
import greeter from '../src/greeter';
import {} from 'jasmine-core';
import * as _ from 'lodash';

// //////////////////////////////////////////////////////////////////////////////
// material taken from https://www.typescriptlang.org/docs/handbook
// //////////////////////////////////////////////////////////////////////////////

beforeEach(() => {
    console.log('#############################');
});

describe('Greeter', () => {
    it("should give appropriate message", () => {
        var user = new Student("Jane", "M.", "User");
        expect(greeter(user)).toBe('Hello, Jane USER');
    });
});

describe('Basic Types', () => {

    it("strings", () => {
        const num = 37;
        let templateMultilineString: string = `Hello,
the number is ${ num + 1 }.
`;
        console.log(templateMultilineString);
    });

    it("arrays", () => {
        let list1: number[] = [1, 2, 3];
        let list2: Array<number> = [1, 2, 3];
    });

    it("tuples", () => {
        let x: [string, number];
        x = ["hello", 10]; // OK
        //x = [10, "hello"]; // Error
        x[6] = 1; //ok, because its a string or a number AND outside of index 0 and 1
        x[6] = 'ok'; // ditto
        //x[6] = true; // not ok, coz not string or number
    });

    it("enums", () => {
        enum Color {Red = 1, Green, Blue}
        let colorName: string = Color[2];
    });

    it("never", () => {
        //never means it will never return something
        function throwAnException(): never { throw new Error('test error'); }

        try { throwAnException(); } catch(e) { console.log(e.message); }
    });

    it("type assertions", () => {
        //like a cast in java
        let someValue: any = "this is a string";
        let strLength: number = (<string>someValue).length;

        strLength = (someValue as string).length;
    });
});

describe('Variable Declarations', () => {
    it("Array Destructuring", () => {
        let input = [1, 2];
        let [first, second] = input;
        console.log(first);
        console.log(second);
        first = input[0];
        second = input[1];
        [first, second] = [second, first];

        let [head, ...tail] = [1, 2, 3, 4];
        console.log(head); // outputs 1
        console.log(tail); // outputs [ 2, 3, 4 ]
        let [, secnd, , fourth] = [1, 2, 3, 4];
    });

    it("Object Destructuring", () => {
        let o = {
            a: "foo",
            b: 12,
            c: "bar"
        };
        let { a, b } = o;
        let { c, ...rest } = o;
        let total = rest.b + rest.a.length;
    });

    it("Property renaming", () => {
        let o = {
            a: "foo",
            b: 12
        };
        let { a: newName1, b: newName2 } = o; //watch out, colon is NOT type, but new name
        console.log(newName1);
    });

    it("Default values", () => {
        type C = { a: string, b?: number }; //has an optional attr b
        function f({ a, b = 1001 }: C): string { //b is given a default value
            return a + b;
        }
        expect(f({a: 'a'})).toBe('a1001');

        function f2({ a, b } = { a: "", b: 0 }): string {
            return a + b;
        }
        expect(f2()).toBe('0');
    });

    it("spread", () => {
        let first = [1, 2];
        let second = [3, 4];
        let bothPlus = [0, ...first, ...second, 5];
        //This gives bothPlus the value [0, 1, 2, 3, 4, 5].
        //Spreading creates a shallow copy of first and second.
        //They are not changed by the spread.

        //You can also spread objects:
        let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
        let search = { ...defaults, food: "rich" }; //default food has been overwritten
        let expected = { food: "rich", price: "$$", ambiance: "noisy" };
        expect(_.isEqual(search, expected)).toBe(true, search);

        search = { food: "rich", ...defaults }; //no longer overriden because defaults is passed in afterwards
        expected = { food: "spicy", price: "$$", ambiance: "noisy" };
        expect(_.isEqual(search, expected)).toBe(true, search);

        //Object spread also has a couple of other surprising limits.
        //First, it only includes an objects’ own, enumerable properties.
        //Basically, that means you lose methods when you spread instances of an object
    });

});

describe('Interfaces', () => {
    it("", () => {
        interface XYZ {
            x:          number; //mandatory
            y?:         number; //optional
            readonly z: number; //readonly
            f(source: string, subString: string): boolean; //a function
        }

        let xyz: XYZ = {x: 1, z: 3, f: (a, b) => { return true;} };
        xyz.x = 5;
        xyz.y = 6;
        //xyz.z = 7; not allowed


        let a: number[] = [1, 2, 3, 4];
        let ro: ReadonlyArray<number> = a; //from Typescript, like java immutable collections
        //illegal: ro[0] = 12;
        //illegal: ro.push(5);
        //illegal: ro.length = 100;
        //illegal: a = ro;



        interface EventListener {
            (event: string): boolean //equivalient to an anonymous function
        }

        let callEventListener = (el: EventListener) => { return el('a')};
        let result = callEventListener( (s) => { return 'a' === s; });
        expect(result).toBe(true);
    });
});

describe('Interfaces', () => {
    it("Indexable Types", () => {
        //TODO
    });
});
