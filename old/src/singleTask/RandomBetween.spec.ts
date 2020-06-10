import { expect, assert } from 'chai';
import { randomBetween } from './randomBetween';
describe('randomBetween: ', () => {
	it('the number should be between the range', () => {
       assert.isNumber(randomBetween(10,25));
       assert.isTrue(randomBetween(10,25) <= 25);
       assert.isTrue(randomBetween(10,25) >= 10);
       assert.isFalse(randomBetween(10,25) < 10);
       assert.isFalse(randomBetween(10,25) > 25);
    });
});