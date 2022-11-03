// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

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
