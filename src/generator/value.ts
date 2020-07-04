import { IElement } from "./element";
export class StaticValue<T> implements IElement {
	value: T;
	constructor(value: T) {
		this.value = value;
	}
	generate(): T {
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
		return "rolly";
	}
}
export class EmailValue implements IElement {
	generate(): string {
		return "rolly@codemente.com";
	}
}
// =======>
export interface IValueGenerator {
	get(value: string): void;
	setNext(next: IValueGenerator): void;
}
export abstract class BaseGenerator {
	next: IValueGenerator;
	type = "static";
	value: string;
	protected abstract generate(): any;
	get(value: string) {
		this.value = value;
		if (this.value === this.type) {
			return this.generate();
		} else {
			return this.next.get(this.value);
		}
	}
	setNext(next: IValueGenerator) {
		if (this.next) {
			this.next.setNext(next);
		} else {
			this.next = next;
		}
	}
}
export class StaticGenerator extends BaseGenerator {
	protected generate() {
		return this.value;
	}
	get(value: string) {
		this.value = value;
		return this.generate();
	}
}
export class StringGenerator extends BaseGenerator {
	type = "string";
	protected generate() {
		return "mfeknewf";
	}
}
export class NumberGenerator extends BaseGenerator {
	type = "number";
	protected generate() {
		return 123;
	}
}
export class BooleanGenerator extends BaseGenerator {
	type = "boolean";
	protected generate() {
		return true;
	}
}
