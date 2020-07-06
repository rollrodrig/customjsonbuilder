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
exports.EmailValue = exports.NameValue = exports.StringValue = exports.StaticValue = exports.ValueGeneratorFactory = exports.ImageGenerator = exports.UuidGenerator = exports.EmailGenerator = exports.NameGenerator = exports.LastNameGenerator = exports.FirstNameGenerator = exports.UndefinedGenerator = exports.NullGenerator = exports.BooleanGenerator = exports.NumberGenerator = exports.StringGenerator = exports.StaticGenerator = exports.BaseGenerator = void 0;
var faker_1 = require("faker");
var random_string_1 = require("../utils/random-string");
var BaseGenerator = (function () {
    function BaseGenerator() {
        this.type = "static";
    }
    BaseGenerator.prototype.get = function (value) {
        this.value = value;
        if (this.value === this.type) {
            return this.generate();
        }
        else {
            return this.next.get(this.value);
        }
    };
    BaseGenerator.prototype.setNext = function (next) {
        if (this.next) {
            this.next.setNext(next);
        }
        else {
            this.next = next;
        }
    };
    return BaseGenerator;
}());
exports.BaseGenerator = BaseGenerator;
var StaticGenerator = (function (_super) {
    __extends(StaticGenerator, _super);
    function StaticGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticGenerator.prototype.generate = function () {
        return this.value;
    };
    StaticGenerator.prototype.get = function (value) {
        this.value = value;
        return this.generate();
    };
    return StaticGenerator;
}(BaseGenerator));
exports.StaticGenerator = StaticGenerator;
var StringGenerator = (function (_super) {
    __extends(StringGenerator, _super);
    function StringGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "string";
        return _this;
    }
    StringGenerator.prototype.generate = function () {
        return random_string_1.randomString();
    };
    return StringGenerator;
}(BaseGenerator));
exports.StringGenerator = StringGenerator;
var NumberGenerator = (function (_super) {
    __extends(NumberGenerator, _super);
    function NumberGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "number";
        return _this;
    }
    NumberGenerator.prototype.generate = function () {
        return faker_1.random.number();
    };
    return NumberGenerator;
}(BaseGenerator));
exports.NumberGenerator = NumberGenerator;
var BooleanGenerator = (function (_super) {
    __extends(BooleanGenerator, _super);
    function BooleanGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "boolean";
        return _this;
    }
    BooleanGenerator.prototype.generate = function () {
        return faker_1.random.boolean();
    };
    return BooleanGenerator;
}(BaseGenerator));
exports.BooleanGenerator = BooleanGenerator;
var NullGenerator = (function (_super) {
    __extends(NullGenerator, _super);
    function NullGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "null";
        return _this;
    }
    NullGenerator.prototype.generate = function () {
        return null;
    };
    return NullGenerator;
}(BaseGenerator));
exports.NullGenerator = NullGenerator;
var UndefinedGenerator = (function (_super) {
    __extends(UndefinedGenerator, _super);
    function UndefinedGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "undefined";
        return _this;
    }
    UndefinedGenerator.prototype.generate = function () {
        return undefined;
    };
    return UndefinedGenerator;
}(BaseGenerator));
exports.UndefinedGenerator = UndefinedGenerator;
var FirstNameGenerator = (function (_super) {
    __extends(FirstNameGenerator, _super);
    function FirstNameGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "firstname";
        return _this;
    }
    FirstNameGenerator.prototype.generate = function () {
        return faker_1.name.firstName();
    };
    return FirstNameGenerator;
}(BaseGenerator));
exports.FirstNameGenerator = FirstNameGenerator;
var LastNameGenerator = (function (_super) {
    __extends(LastNameGenerator, _super);
    function LastNameGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "lastname";
        return _this;
    }
    LastNameGenerator.prototype.generate = function () {
        return faker_1.name.lastName();
    };
    return LastNameGenerator;
}(BaseGenerator));
exports.LastNameGenerator = LastNameGenerator;
var NameGenerator = (function (_super) {
    __extends(NameGenerator, _super);
    function NameGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "name";
        return _this;
    }
    NameGenerator.prototype.generate = function () {
        return faker_1.name.findName();
    };
    return NameGenerator;
}(BaseGenerator));
exports.NameGenerator = NameGenerator;
var EmailGenerator = (function (_super) {
    __extends(EmailGenerator, _super);
    function EmailGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "email";
        return _this;
    }
    EmailGenerator.prototype.generate = function () {
        return faker_1.internet.email();
    };
    return EmailGenerator;
}(BaseGenerator));
exports.EmailGenerator = EmailGenerator;
var UuidGenerator = (function (_super) {
    __extends(UuidGenerator, _super);
    function UuidGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "uuid";
        return _this;
    }
    UuidGenerator.prototype.generate = function () {
        return faker_1.random.uuid();
    };
    return UuidGenerator;
}(BaseGenerator));
exports.UuidGenerator = UuidGenerator;
var ImageGenerator = (function (_super) {
    __extends(ImageGenerator, _super);
    function ImageGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "image";
        return _this;
    }
    ImageGenerator.prototype.generate = function () {
        return faker_1.random.image();
    };
    return ImageGenerator;
}(BaseGenerator));
exports.ImageGenerator = ImageGenerator;
var ValueGeneratorFactory = (function () {
    function ValueGeneratorFactory() {
        this.generator = new StringGenerator();
        this.generator.setNext(new NumberGenerator());
        this.generator.setNext(new BooleanGenerator());
        this.generator.setNext(new NullGenerator());
        this.generator.setNext(new UndefinedGenerator());
        this.generator.setNext(new FirstNameGenerator());
        this.generator.setNext(new LastNameGenerator());
        this.generator.setNext(new NameGenerator());
        this.generator.setNext(new EmailGenerator());
        this.generator.setNext(new UuidGenerator());
        this.generator.setNext(new ImageGenerator());
        this.generator.setNext(new StaticGenerator());
    }
    ValueGeneratorFactory.prototype.setNext = function () { };
    ValueGeneratorFactory.prototype.get = function (value) {
        return this.generator.get(value);
    };
    return ValueGeneratorFactory;
}());
exports.ValueGeneratorFactory = ValueGeneratorFactory;
var StaticValue = (function () {
    function StaticValue(value) {
        this.value = value;
    }
    StaticValue.prototype.generate = function () {
        return this.value;
    };
    return StaticValue;
}());
exports.StaticValue = StaticValue;
var StringValue = (function () {
    function StringValue() {
    }
    StringValue.prototype.generate = function () {
        return "RgerGERrrJR";
    };
    return StringValue;
}());
exports.StringValue = StringValue;
var NameValue = (function () {
    function NameValue() {
    }
    NameValue.prototype.generate = function () {
        return faker_1.name.firstName();
    };
    return NameValue;
}());
exports.NameValue = NameValue;
var EmailValue = (function () {
    function EmailValue() {
    }
    EmailValue.prototype.generate = function () {
        return "rolly@codemente.com";
    };
    return EmailValue;
}());
exports.EmailValue = EmailValue;
