import { IElement } from './element';
export class StaticValue<T> implements IElement {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    generate(): T  {
        return this.value;
    }
}
export class StringValue implements IElement {
    generate(): string {
        return "RgerGERrrJR";
    }
}
export class NameValue implements IElement {
    generate(): string {
        return "rolly"
    }
}
export class EmailValue implements IElement {
    generate(): string {
        return "rolly@codemente.com"
    }
}
