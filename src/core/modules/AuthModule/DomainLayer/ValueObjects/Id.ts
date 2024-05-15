import { uuid, isUuid, fromString } from 'uuidv4'

export class Id {
	private readonly _value: string

	constructor() {
		this._value = uuid()
	}

	static generate(str: string): string {
		return fromString(str)
	}

	static isValid(id: string): boolean {
		return isUuid(id)
	}

	get value(): string {
		return this._value
	}
}
