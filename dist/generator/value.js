"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValue = exports.NameValue = exports.StringValue = exports.StaticValue = exports.ValueGeneratorFactory = exports.DateGenerator = exports.ParagraphsGenerator = exports.ParagraphGenerator = exports.WordsGenerator = exports.WordGenerator = exports.TextGenerator = exports.TitleGenerator = exports.ImageGenerator = exports.UuidGenerator = exports.PasswordGenerator = exports.UserNameGenerator = exports.EmailGenerator = exports.AgeKidGenerator = exports.Age18Generator = exports.AgeGenerator = exports.LastNameGenerator = exports.FirstNameGenerator = exports.NameGenerator = exports.EmptyGenerator = exports.FalseGenerator = exports.TrueGenerator = exports.UndefinedGenerator = exports.NullGenerator = exports.StaticGenerator = exports.BooleanGenerator = exports.NumberGenerator = exports.StringGenerator = exports.BaseGenerator = void 0;
const faker_1 = require("@faker-js/faker");
const utils_1 = require("../utils/utils");
class BaseGenerator {
    constructor() {
        this.type = 'static';
    }
    get(value) {
        this.value = value;
        if (this.value === this.type) {
            return this.generate();
        }
        else {
            return this.next.get(this.value);
        }
    }
    setNext(next) {
        if (this.next) {
            this.next.setNext(next);
        }
        else {
            this.next = next;
        }
    }
}
exports.BaseGenerator = BaseGenerator;
// primitives
class StringGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'string';
    }
    generate() {
        return (0, utils_1.randomString)();
    }
}
exports.StringGenerator = StringGenerator;
class NumberGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'number';
    }
    generate() {
        return faker_1.faker.number.int();
    }
}
exports.NumberGenerator = NumberGenerator;
class BooleanGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'boolean';
    }
    generate() {
        return Math.random() > 0.5 ? true : false;
    }
}
exports.BooleanGenerator = BooleanGenerator;
// static
class StaticGenerator extends BaseGenerator {
    generate() {
        return this.value;
    }
    get(value) {
        this.value = value;
        return this.generate();
    }
}
exports.StaticGenerator = StaticGenerator;
class NullGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'null';
    }
    generate() {
        return null;
    }
}
exports.NullGenerator = NullGenerator;
class UndefinedGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'undefined';
    }
    generate() {
        return undefined;
    }
}
exports.UndefinedGenerator = UndefinedGenerator;
class TrueGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'true';
    }
    generate() {
        return true;
    }
}
exports.TrueGenerator = TrueGenerator;
class FalseGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'false';
    }
    generate() {
        return false;
    }
}
exports.FalseGenerator = FalseGenerator;
class EmptyGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'empty';
    }
    generate() {
        return '';
    }
}
exports.EmptyGenerator = EmptyGenerator;
// person
class NameGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'name';
    }
    generate() {
        return faker_1.faker.person.fullName();
    }
}
exports.NameGenerator = NameGenerator;
class FirstNameGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'firstname';
    }
    generate() {
        return faker_1.faker.person.firstName();
    }
}
exports.FirstNameGenerator = FirstNameGenerator;
class LastNameGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'lastname';
    }
    generate() {
        return faker_1.faker.person.lastName();
    }
}
exports.LastNameGenerator = LastNameGenerator;
class AgeGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'age';
    }
    generate() {
        return (0, utils_1.randomNumber)(1, 99);
    }
}
exports.AgeGenerator = AgeGenerator;
class Age18Generator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'age18';
    }
    generate() {
        return (0, utils_1.randomNumber)(18, 99);
    }
}
exports.Age18Generator = Age18Generator;
class AgeKidGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'agekid';
    }
    generate() {
        return (0, utils_1.randomNumber)(1, 18);
    }
}
exports.AgeKidGenerator = AgeKidGenerator;
// internet
class EmailGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'email';
    }
    generate() {
        return faker_1.faker.internet.email();
    }
}
exports.EmailGenerator = EmailGenerator;
class UserNameGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'username';
    }
    generate() {
        return faker_1.faker.internet.userName();
    }
}
exports.UserNameGenerator = UserNameGenerator;
class PasswordGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'password';
    }
    generate() {
        return faker_1.faker.internet.password();
    }
}
exports.PasswordGenerator = PasswordGenerator;
// random
class UuidGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'uuid';
    }
    generate() {
        return faker_1.faker.string.uuid();
    }
}
exports.UuidGenerator = UuidGenerator;
// image
class ImageGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'image';
    }
    generate() {
        return faker_1.faker.image;
    }
}
exports.ImageGenerator = ImageGenerator;
// text
class TitleGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'title';
    }
    generate() {
        return faker_1.faker.lorem.sentence();
    }
}
exports.TitleGenerator = TitleGenerator;
class TextGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'text';
    }
    generate() {
        return faker_1.faker.lorem.text();
    }
}
exports.TextGenerator = TextGenerator;
class WordGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'word';
    }
    generate() {
        return faker_1.faker.lorem.word();
    }
}
exports.WordGenerator = WordGenerator;
class WordsGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'words';
    }
    generate() {
        return faker_1.faker.lorem.words();
    }
}
exports.WordsGenerator = WordsGenerator;
class ParagraphGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'paragraph';
    }
    generate() {
        return faker_1.faker.lorem.paragraph();
    }
}
exports.ParagraphGenerator = ParagraphGenerator;
class ParagraphsGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'paragraphs';
    }
    generate() {
        return faker_1.faker.lorem.paragraphs();
    }
}
exports.ParagraphsGenerator = ParagraphsGenerator;
// Date
class DateGenerator extends BaseGenerator {
    constructor() {
        super(...arguments);
        this.type = 'date';
    }
    generate() {
        return faker_1.faker.date.recent();
    }
}
exports.DateGenerator = DateGenerator;
class ValueGeneratorFactory {
    constructor() {
        // primitives
        this.generator = new StringGenerator();
        this.generator.setNext(new NumberGenerator());
        this.generator.setNext(new BooleanGenerator());
        // static
        this.generator.setNext(new NullGenerator());
        this.generator.setNext(new UndefinedGenerator());
        this.generator.setNext(new TrueGenerator());
        this.generator.setNext(new FalseGenerator());
        this.generator.setNext(new EmptyGenerator());
        // person
        this.generator.setNext(new NameGenerator());
        this.generator.setNext(new FirstNameGenerator());
        this.generator.setNext(new LastNameGenerator());
        this.generator.setNext(new AgeGenerator());
        this.generator.setNext(new Age18Generator());
        this.generator.setNext(new AgeKidGenerator());
        // internet
        this.generator.setNext(new EmailGenerator());
        this.generator.setNext(new UserNameGenerator());
        this.generator.setNext(new PasswordGenerator());
        // random
        this.generator.setNext(new UuidGenerator());
        // image
        this.generator.setNext(new ImageGenerator());
        // text
        this.generator.setNext(new TitleGenerator());
        this.generator.setNext(new TextGenerator());
        this.generator.setNext(new WordGenerator());
        this.generator.setNext(new WordsGenerator());
        this.generator.setNext(new ParagraphGenerator());
        this.generator.setNext(new ParagraphsGenerator());
        // date
        this.generator.setNext(new DateGenerator());
        // static fixed
        this.generator.setNext(new StaticGenerator());
    }
    setNext() { }
    get(value) {
        return this.generator.get(value);
    }
}
exports.ValueGeneratorFactory = ValueGeneratorFactory;
// TODO, remove this
class StaticValue {
    constructor(value) {
        this.value = value;
    }
    generate() {
        return this.value;
    }
}
exports.StaticValue = StaticValue;
class StringValue {
    generate() {
        return 'RgerGERrrJR';
    }
}
exports.StringValue = StringValue;
class NameValue {
    generate() {
        return faker_1.faker.person.firstName();
    }
}
exports.NameValue = NameValue;
class EmailValue {
    generate() {
        return faker_1.faker.internet.email();
    }
}
exports.EmailValue = EmailValue;
