import { expect, assert } from 'chai';
import { spaceCleaner } from './SpaceCleaner';
describe('SpaceCleaner: ', () => {
    it('should spaces from string', () => {
        expect(spaceCleaner("hola que tal")).eq("holaquetal");
        expect(spaceCleaner("{hola que tal}")).eq("{holaquetal}");
        expect(spaceCleaner("{key: val, other: val}")).eq("{key:val,other:val}");
        expect(spaceCleaner("{key: val, other: [{ key: val, ss: bb }]}")).eq("{key:val,other:[{key:val,ss:bb}]}");
    });
});