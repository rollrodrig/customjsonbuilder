import { expect, assert } from 'chai';
import { removeSpaces } from './RemoveSpaces';
describe('removeSpaces: ', () => {
    it('should remove only spaces', () => {
        expect(removeSpaces("this have space")).equal("thishavespace");
        expect(removeSpaces("this have")).equal("thishave");
        expect(removeSpaces(" start with space")).equal("startwithspace");
        expect(removeSpaces("     multy space")).equal("multyspace");
        expect(removeSpaces("multy end      ")).equal("multyend");
        expect(removeSpaces("space at the end ")).equal("spaceattheend");
        expect(removeSpaces("nospaceshere")).equal("nospaceshere");
        expect(removeSpaces("no_spaces_here")).equal("no_spaces_here");
        expect(removeSpaces("no_#$$%&^&^*&^@#$@(((#$@re")).equal("no_#$$%&^&^*&^@#$@(((#$@re");
        expect(removeSpaces("no_#$$ %&^&^*&^@# $@(((#$@r e")).equal("no_#$$%&^&^*&^@#$@(((#$@re");
        
    });
});