"use strict";
const build_1 = require("./constructors/build");
const generateResponse_1 = require("./constructors/generateResponse");
class Builder {
    constructor(p) {
        this.pattern = p;
    }
    setPattern(p) {
        this.pattern = p;
    }
    getResponse() {
        this.response = generateResponse_1.generateResponse(build_1.build(this.pattern));
        return this.response;
    }
}
module.exports = Builder;
