import { assert, expect } from 'chai';
import { keyValueDivider } from './KeyValueDivider';

describe('keyValueDivider: ', () => {
    it('divide the string based on the first two points :', () => {
        expect(keyValueDivider("name:string")).to.deep.equal({key:"name", value:"string"});
        expect(keyValueDivider("phone:number")).to.deep.equal({key:"phone", value:"number"});
        expect(keyValueDivider("ids:[123,456]")).to.deep.equal({key:"ids", value:"[123,456]"});
        expect(keyValueDivider("ids:{}")).to.deep.equal({key:"ids", value:"{}"});
        expect(keyValueDivider("ids:{[]}")).to.deep.equal({key:"ids", value:"{[]}"});
        expect(keyValueDivider("ids:{[abc,fgh]}")).to.deep.equal({key:"ids", value:"{[abc,fgh]}"});
        expect(keyValueDivider("post:{title:string, body:text}")).to.deep.equal({key:"post", value:"{title:string, body:text}"});
        expect(keyValueDivider("posts:[{title:string}]")).to.deep.equal({key:"posts", value:"[{title:string}]"});
        expect(keyValueDivider("authors:[{name:string}]")).to.deep.equal({key:"authors", value:"[{name:string}]"});
        expect(keyValueDivider("authors:_")).to.deep.equal({key:"authors", value:"_"});
        expect(keyValueDivider("authors: ")).to.deep.equal({key:"authors", value:" "});
        expect(keyValueDivider("authors:")).to.deep.equal({key:"authors", value:""});
    });
});