import { Id } from '../ValueObjects/Id'

export interface IUser {
	id?: string
	email: string
	password: string
	created_at?: Date
	updated_at?: Date
}

export class User implements User {
	private id: string
	private email: string
	private password: string
	private created_at: Date
	private updated_at: Date

	constructor(user: IUser) {
		this.id = user.id || new Id().value
		this.email = user.email
		this.password = user.password
		this.created_at = user.created_at || new Date()
		this.updated_at = user.updated_at || new Date()
	}
}
