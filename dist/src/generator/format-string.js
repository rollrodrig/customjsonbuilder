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
exports.ValueGenerator = exports.VAR_CHILD_IDENTIFIER = exports.FormatString = exports.ResponseList = exports.ResponseDict = exports.Response = void 0;
var constant_1 = require("../utils/constant");
var generator_1 = require("./generator");
var value_1 = require("./value");
var Response = (function () {
    function Response(pattern) {
        this.pattern = pattern;
        this.valueGenerator = new ValueGenerator();
    }
    Response.prototype.removeFirstLastBraces = function () {
        this.pattern = this.pattern.substring(1);
        this.pattern = this.pattern.substring(0, this.pattern.length - 1);
    };
    Response.prototype.splitInPairs = function () {
        return this.pattern.split(",");
    };
    return Response;
}());
exports.Response = Response;
var ResponseDict = (function (_super) {
    __extends(ResponseDict, _super);
    function ResponseDict() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._response = {};
        return _this;
    }
    Object.defineProperty(ResponseDict.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    ResponseDict.prototype.addResponse = function (tmp, pair) {
        var keyValue = pair.split(":");
        var key = keyValue[0];
        var value = keyValue[1];
        tmp[key] = this.valueGenerator.generate(value);
    };
    ResponseDict.prototype.generate = function () {
        var _this = this;
        this.removeFirstLastBraces();
        var pairs = this.splitInPairs();
        var tmp = {};
        pairs.map(function (pair) {
            _this.addResponse(tmp, pair);
        });
        this._response = tmp;
        return this._response;
    };
    return ResponseDict;
}(Response));
exports.ResponseDict = ResponseDict;
var ResponseList = (function (_super) {
    __extends(ResponseList, _super);
    function ResponseList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._response = [];
        _this.TIMES = constant_1.OPTION_TIME;
        return _this;
    }
    Object.defineProperty(ResponseList.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    ResponseList.prototype.addResponse = function (tmp, pair) {
        var keyValue = pair.split(":");
        var key = keyValue[0];
        var value = keyValue[1];
        if (key !== this.TIMES) {
            tmp[key] = this.valueGenerator.generate(value);
        }
    };
    ResponseList.prototype.getTimes = function () {
        var regex = new RegExp("\\" + this.TIMES + ":([0-9]+)");
        var matchs = this.pattern.match(regex);
        var times = 1;
        if (matchs) {
            times = parseInt(matchs[1]);
            if (times <= 0)
                times = 1;
        }
        return times;
    };
    ResponseList.prototype.generate = function () {
        var _this = this;
        this.removeFirstLastBraces();
        var times = this.getTimes();
        var pairs = this.splitInPairs();
        var _loop_1 = function (i) {
            var tmp = {};
            pairs.map(function (pair) {
                _this.addResponse(tmp, pair);
            });
            this_1._response.push(tmp);
        };
        var this_1 = this;
        for (var i = 0; i < times; i++) {
            _loop_1(i);
        }
        return this._response;
    };
    return ResponseList;
}(Response));
exports.ResponseList = ResponseList;
var FormatString = (function () {
    function FormatString(pattern) {
        this._pattern = pattern;
    }
    Object.defineProperty(FormatString.prototype, "pattern", {
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormatString.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    FormatString.prototype.isItList = function () {
        return this._pattern.search("\\" + constant_1.OPTION_TIME) > -1;
    };
    FormatString.prototype.generate = function () {
        var formater;
        if (this.isItList()) {
            formater = new ResponseList(this._pattern);
        }
        else {
            formater = new ResponseDict(this._pattern);
        }
        this._response = formater.generate();
        return this._response;
    };
    return FormatString;
}());
exports.FormatString = FormatString;
exports.VAR_CHILD_IDENTIFIER = "___VAR___";
var ValueGenerator = (function () {
    function ValueGenerator() {
        this.storage = generator_1.DataStorage.getInstance();
        this.valueFactory = new value_1.ValueGeneratorFactory();
    }
    ValueGenerator.prototype.isChild = function () {
        return this.value.search(exports.VAR_CHILD_IDENTIFIER) > -1;
    };
    ValueGenerator.prototype.getStorageKey = function () {
        return this.value.replace(exports.VAR_CHILD_IDENTIFIER, "");
    };
    ValueGenerator.prototype.getFromStorage = function (storageKey) {
        return this.storage.get(storageKey);
    };
    ValueGenerator.prototype.getFromFactory = function () {
        return this.valueFactory.get(this.value);
    };
    ValueGenerator.prototype.getContent = function () {
        var content;
        if (this.isChild()) {
            var storageKey = this.getStorageKey();
            content = this.getFromStorage(storageKey);
        }
        else {
            content = this.getFromFactory();
        }
        return content;
    };
    ValueGenerator.prototype.generate = function (value) {
        this.value = value;
        return this.getContent();
    };
    return ValueGenerator;
}());
exports.ValueGenerator = ValueGenerator;
