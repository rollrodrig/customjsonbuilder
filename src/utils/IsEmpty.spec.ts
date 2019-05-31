import { assert, expect } from 'chai';
import { isEmpty } from './IsEmpty';
describe('IsEmpty: ', () => {
    it('.isEmpty: not empty, should return false', () => {
        assert.isFalse(isEmpty("content"))
        assert.isFalse(isEmpty("{}"))
        assert.isFalse(isEmpty("{"))
        assert.isFalse(isEmpty("0"))
    });
    it('.isEmpty: is empty, should return true', () => {
        assert.isTrue(isEmpty(" "))
        assert.isTrue(isEmpty(null))
    });
});