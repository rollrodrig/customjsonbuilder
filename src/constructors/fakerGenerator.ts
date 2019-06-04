import faker from 'faker';
import { Primitives } from '../descriptive/Primitives';
import { NonPromitives } from '../descriptive/NonPromitives';
export const fakerGenerator = (value):any => {
    let generated:any = faker.random.word();
    switch(value) {
        case Primitives.string:
            generated = faker.random.word();
        break;
        case Primitives.number:
            generated = faker.random.number();
            break;
        case Primitives.boolean:
            generated = faker.random.boolean()
        break;
        case Primitives.null:
            generated = null;
        break;
        case Primitives.undefined:
            generated = undefined;
        break;
        case Primitives.empty:
            generated = ""
        break;
        case NonPromitives.username:
            generated = faker.internet.userName();
        break;
        case NonPromitives.firstName:
            generated = faker.name.firstName();
        break;
        case NonPromitives.lastName:
            generated = faker.name.lastName();
        break;
        case NonPromitives.email:
            generated = faker.internet.email();
        break;
        case NonPromitives.word:
            generated = faker.lorem.word();
        break;
        case NonPromitives.words:
            generated = faker.lorem.words();
        break;
        case NonPromitives.title:
            generated = faker.lorem.sentence();
        break;
        case NonPromitives.sentence:
            generated = faker.lorem.sentence();
        break;
        case NonPromitives.paragraph:
            generated = faker.lorem.paragraph();
        break;
        case NonPromitives.paragraphs:
            generated = faker.lorem.paragraphs();
        break;
        case NonPromitives.text:
            generated = faker.lorem.text();
        break;
    }
    return generated
}