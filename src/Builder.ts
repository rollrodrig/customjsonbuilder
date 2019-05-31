import faker from 'faker';
export default class Builder {
    query:any;
    json:any;
    constructor(q:any){
        this.query = q;
        // console.log(this.query);
    }
    setQuery(query) {
        this.query = query;
    }
    getJson() {
        this.json = {
            name:faker.name.firstName(),
        }
        return this.json;
    }
}