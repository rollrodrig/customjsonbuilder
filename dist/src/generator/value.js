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
exports.EmailValue = exports.NameValue = exports.StringValue = exports.StaticValue = exports.ValueGeneratorFactory = exports.DateGenerator = exports.ParagraphsGenerator = exports.ParagraphGenerator = exports.WordsGenerator = exports.WordGenerator = exports.TextGenerator = exports.TitleGenerator = exports.ImageGenerator = exports.UuidGenerator = exports.PasswordGenerator = exports.UserNameGenerator = exports.EmailGenerator = exports.AgeKidGenerator = exports.Age18Generator = exports.AgeGenerator = exports.LastNameGenerator = exports.FirstNameGenerator = exports.NameGenerator = exports.EmptyGenerator = exports.FalseGenerator = exports.TrueGenerator = exports.UndefinedGenerator = exports.NullGenerator = exports.StaticGenerator = exports.BooleanGenerator = exports.NumberGenerator = exports.StringGenerator = exports.BaseGenerator = void 0;
var faker_1 = require("faker");
var moment = require("moment");
var random_string_1 = require("../utils/random-string");
var helpers_1 = require("../utils/helpers");
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
var TrueGenerator = (function (_super) {
    __extends(TrueGenerator, _super);
    function TrueGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "true";
        return _this;
    }
    TrueGenerator.prototype.generate = function () {
        return true;
    };
    return TrueGenerator;
}(BaseGenerator));
exports.TrueGenerator = TrueGenerator;
var FalseGenerator = (function (_super) {
    __extends(FalseGenerator, _super);
    function FalseGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "false";
        return _this;
    }
    FalseGenerator.prototype.generate = function () {
        return false;
    };
    return FalseGenerator;
}(BaseGenerator));
exports.FalseGenerator = FalseGenerator;
var EmptyGenerator = (function (_super) {
    __extends(EmptyGenerator, _super);
    function EmptyGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "empty";
        return _this;
    }
    EmptyGenerator.prototype.generate = function () {
        return "";
    };
    return EmptyGenerator;
}(BaseGenerator));
exports.EmptyGenerator = EmptyGenerator;
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
var AgeGenerator = (function (_super) {
    __extends(AgeGenerator, _super);
    function AgeGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "age";
        return _this;
    }
    AgeGenerator.prototype.generate = function () {
        return helpers_1.randomNumber(1, 99);
    };
    return AgeGenerator;
}(BaseGenerator));
exports.AgeGenerator = AgeGenerator;
var Age18Generator = (function (_super) {
    __extends(Age18Generator, _super);
    function Age18Generator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "age18";
        return _this;
    }
    Age18Generator.prototype.generate = function () {
        return helpers_1.randomNumber(18, 99);
    };
    return Age18Generator;
}(BaseGenerator));
exports.Age18Generator = Age18Generator;
var AgeKidGenerator = (function (_super) {
    __extends(AgeKidGenerator, _super);
    function AgeKidGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "agekid";
        return _this;
    }
    AgeKidGenerator.prototype.generate = function () {
        return helpers_1.randomNumber(1, 18);
    };
    return AgeKidGenerator;
}(BaseGenerator));
exports.AgeKidGenerator = AgeKidGenerator;
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
var UserNameGenerator = (function (_super) {
    __extends(UserNameGenerator, _super);
    function UserNameGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "username";
        return _this;
    }
    UserNameGenerator.prototype.generate = function () {
        return faker_1.internet.userName();
    };
    return UserNameGenerator;
}(BaseGenerator));
exports.UserNameGenerator = UserNameGenerator;
var PasswordGenerator = (function (_super) {
    __extends(PasswordGenerator, _super);
    function PasswordGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "password";
        return _this;
    }
    PasswordGenerator.prototype.generate = function () {
        return faker_1.internet.password();
    };
    return PasswordGenerator;
}(BaseGenerator));
exports.PasswordGenerator = PasswordGenerator;
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
var TitleGenerator = (function (_super) {
    __extends(TitleGenerator, _super);
    function TitleGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "title";
        return _this;
    }
    TitleGenerator.prototype.generate = function () {
        return faker_1.lorem.sentence();
    };
    return TitleGenerator;
}(BaseGenerator));
exports.TitleGenerator = TitleGenerator;
var TextGenerator = (function (_super) {
    __extends(TextGenerator, _super);
    function TextGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "text";
        return _this;
    }
    TextGenerator.prototype.generate = function () {
        return faker_1.lorem.text();
    };
    return TextGenerator;
}(BaseGenerator));
exports.TextGenerator = TextGenerator;
var WordGenerator = (function (_super) {
    __extends(WordGenerator, _super);
    function WordGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "word";
        return _this;
    }
    WordGenerator.prototype.generate = function () {
        return faker_1.lorem.word();
    };
    return WordGenerator;
}(BaseGenerator));
exports.WordGenerator = WordGenerator;
var WordsGenerator = (function (_super) {
    __extends(WordsGenerator, _super);
    function WordsGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "words";
        return _this;
    }
    WordsGenerator.prototype.generate = function () {
        return faker_1.lorem.words();
    };
    return WordsGenerator;
}(BaseGenerator));
exports.WordsGenerator = WordsGenerator;
var ParagraphGenerator = (function (_super) {
    __extends(ParagraphGenerator, _super);
    function ParagraphGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "paragraph";
        return _this;
    }
    ParagraphGenerator.prototype.generate = function () {
        return faker_1.lorem.paragraph();
    };
    return ParagraphGenerator;
}(BaseGenerator));
exports.ParagraphGenerator = ParagraphGenerator;
var ParagraphsGenerator = (function (_super) {
    __extends(ParagraphsGenerator, _super);
    function ParagraphsGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "paragraphs";
        return _this;
    }
    ParagraphsGenerator.prototype.generate = function () {
        return faker_1.lorem.paragraphs();
    };
    return ParagraphsGenerator;
}(BaseGenerator));
exports.ParagraphsGenerator = ParagraphsGenerator;
var DateGenerator = (function (_super) {
    __extends(DateGenerator, _super);
    function DateGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "date";
        return _this;
    }
    DateGenerator.prototype.generate = function () {
        return moment().format();
    };
    return DateGenerator;
}(BaseGenerator));
exports.DateGenerator = DateGenerator;
var ValueGeneratorFactory = (function () {
    function ValueGeneratorFactory() {
        this.generator = new StringGenerator();
        this.generator.setNext(new NumberGenerator());
        this.generator.setNext(new BooleanGenerator());
        this.generator.setNext(new NullGenerator());
        this.generator.setNext(new UndefinedGenerator());
        this.generator.setNext(new TrueGenerator());
        this.generator.setNext(new FalseGenerator());
        this.generator.setNext(new EmptyGenerator());
        this.generator.setNext(new NameGenerator());
        this.generator.setNext(new FirstNameGenerator());
        this.generator.setNext(new LastNameGenerator());
        this.generator.setNext(new AgeGenerator());
        this.generator.setNext(new Age18Generator());
        this.generator.setNext(new AgeKidGenerator());
        this.generator.setNext(new EmailGenerator());
        this.generator.setNext(new UserNameGenerator());
        this.generator.setNext(new PasswordGenerator());
        this.generator.setNext(new UuidGenerator());
        this.generator.setNext(new ImageGenerator());
        this.generator.setNext(new TitleGenerator());
        this.generator.setNext(new TextGenerator());
        this.generator.setNext(new WordGenerator());
        this.generator.setNext(new WordsGenerator());
        this.generator.setNext(new ParagraphGenerator());
        this.generator.setNext(new ParagraphsGenerator());
        this.generator.setNext(new DateGenerator());
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
