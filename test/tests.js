// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

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
