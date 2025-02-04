import { add, subtract, multiply, addNumbers } from './calculator';

describe('Calculator', () => {
    test('add', () => {
        expect(add(1, 2)).toBe(3);
        expect(addNumbers(1, 2)).toBe(3); // Duplicate test
    });

    test('subtract', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('multiply', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('greet function', () => {
        expect(greet('World')).toBe('Hello, World!');
    });
});