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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dict = void 0;
var element_1 = require("./element");
var Dict = (function (_super) {
    __extends(Dict, _super);
    function Dict(key, value) {
        var _a;
        var _this = _super.call(this) || this;
        _this.payload = {};
        if (key && value) {
            _this.payload = (_a = {},
                _a[key] = value.generate(),
                _a);
        }
        return _this;
    }
    Dict.prototype.generate = function () {
        var _this = this;
        this.elements.map(function (c) {
            var tmp = c.generate();
            _this.payload = __assign(__assign({}, _this.payload), tmp);
        });
        return this.payload;
    };
    return Dict;
}(element_1.GenericElement));
exports.Dict = Dict;
