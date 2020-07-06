"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var element_1 = require("./element");
var List = (function (_super) {
    __extends(List, _super);
    function List(value) {
        var _this = _super.call(this) || this;
        _this.payload = [];
        if (value) {
            _this.elements.push(value);
        }
        return _this;
    }
    List.prototype.generate = function () {
        var _this = this;
        this.elements.map(function (c) {
            var tmp = c.generate();
            _this.payload.push(tmp);
        });
        return this.payload;
    };
    return List;
}(element_1.GenericElement));
exports.List = List;
