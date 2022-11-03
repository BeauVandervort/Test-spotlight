// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    multiply,
    multiplyBy12ThenHalve,
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'howdy yall';
    const actual = myFunction('yall');
    expect.equal(actual, expected);

    const expected2 = 'howdy partner';
    const actual2 = myFunction('partner');
    expect.equal(actual2, expected2);

    const expected3 = 'howdy cowboy';
    const actual3 = myFunction('cowboy');
    expect.equal(actual3, expected3);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should add 3 exclamation points', (expect) => {
    const expected = 'yall!!!';
    const actual = addExclamationPoints('yall');
    expect.equal(actual, expected);

    const expected2 = 'partner!!!';
    const actual2 = addExclamationPoints('partner');
    expect.equal(actual2, expected2);

    const expected3 = 'cowboy!!!';
    const actual3 = addExclamationPoints('cowboy');
    expect.equal(actual3, expected3);
});

test('this test should multiply number input by 7', (expect) => {
    const expected = 7;
    const actual = multiply(1);
    expect.equal(actual, expected);

    const expected2 = 14;
    const actual2 = multiply(2);
    expect.equal(actual2, expected2);

    const expected3 = 21;
    const actual3 = multiply(3);
    expect.equal(actual3, expected3);
});

test('this test should multiply by 12 then halve', (expect) => {
    const expected = 6;
    const actual = multiplyBy12ThenHalve(1);
    expect.equal(actual, expected);

    const expected2 = 12;
    const actual2 = multiplyBy12ThenHalve(2);
    expect.equal(actual2, expected2);

    const expected3 = 18;
    const actual3 = multiplyBy12ThenHalve(3);
    expect.equal(actual3, expected3);
});

test('this test should divide the first number by the second and multiply that number by the third', (expect) => {
    const expected = 6;
    const actual = divideThenMultiply(4, 2, 3);
    expect.equal(actual, expected);

    const expected2 = 12;
    const actual2 = divideThenMultiply(6, 2, 4);
    expect.equal(actual2, expected2);

    const expected3 = 4;
    const actual3 = divideThenMultiply(8, 4, 2);
    expect.equal(actual3, expected3);
});
