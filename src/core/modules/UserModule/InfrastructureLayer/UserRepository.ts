import { PrismaClient, User } from '@prisma/client'
import { IUserRepository } from './IUserRepository'
import { CreateUserDTO } from '../PresentationLayer/DTOs/CreateUsersDTO'
import { UpdateUserDTO } from '../PresentationLayer/DTOs/UpdateUserDTO'
import { NotFoundError } from 'elysia'

export class UserRepository implements IUserRepository {
	db: PrismaClient
	constructor(db: PrismaClient) {
		this.db = db
	}

	async listUsers(): Promise<Array<User>> {
		const data = await this.db.user.findMany()
		return data as Array<User>
	}

	async findUserById(id: string): Promise<User> {
		const user = await this.db.user.findUnique({
			where: { id },
		})
		if (!user || user === null) {
			throw new NotFoundError(`User with id: ${id} not found`)
		}
		return user
	}
	async createUser(payload: CreateUserDTO): Promise<User> {
		return await this.db.user.create({
			data: payload,
		})
	}
	async updateUser(id: string, payload: UpdateUserDTO): Promise<User> {
		return await this.db.user.update({
			where: { id },
			data: payload,
		})
	}
	async deleteUser(id: string): Promise<string | void> {
		await this.db.user.delete({ where: { id } })
		return `User id: ${id} was deleted`
	}
}
