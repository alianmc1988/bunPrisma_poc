import { PrismaClient, User } from '@prisma/client'
import { IUserRepository } from './IUserRepository'
import { CreateUserDTO } from '../PresentationLayer/DTOs/CreateUsersDTO'
import { UpdateUserDTO } from '../PresentationLayer/DTOs/UpdateUserDTO'
import { NotFoundError } from 'elysia'
import { IQuery, OrderByEnum } from '../PresentationLayer/DTOs/ListUsersDTO'

export class UserRepository implements IUserRepository {
	db: PrismaClient
	constructor() {
		this.db = new PrismaClient()
	}

	async listUsers(query: IQuery): Promise<Array<User>> {
		const queryData = {
			skip: 0,
			take: 10,
			orderBy: { createdAt: OrderByEnum.ASC },
		}
		query?.skip && (queryData['skip'] = +query.skip)
		query?.take && (queryData['take'] = +query.take)
		query?.orderBy && (queryData['orderBy'] = query.orderBy)
		const data = await this.db.user.findMany(queryData)
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

	async updateUserToken(id: string, payload: { token: string }): Promise<User> {
		const data = await this.db.user.update({
			where: { id },
			data: payload,
		})

		return data
	}
	async deleteUser(id: string): Promise<string> {
		await this.db.user.delete({ where: { id } })
		return `User id: ${id} was deleted`
	}

	async findUserByEmail(email: string): Promise<User> {
		const user = await this.db.user.findUnique({
			where: { email },
		})
		if (!user || user === null) {
			throw new NotFoundError(`User with email: ${email} not found`)
		}
		return user
	}
}
