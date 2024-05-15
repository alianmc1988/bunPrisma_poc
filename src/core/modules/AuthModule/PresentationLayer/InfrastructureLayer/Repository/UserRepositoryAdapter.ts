import { SignUpDTO } from '../../DTOs/SignUpDTO'
import { IUserRepositoryAdapter } from './IUserRepositoryAdapter'
import { UserRepository } from '../../../../UserModule/InfrastructureLayer/UserRepository'
import { PrismaClient, User } from '@prisma/client'

export class UserRepositoryAdapter implements Partial<IUserRepositoryAdapter> {
	static async createUser(db: PrismaClient, payload: SignUpDTO): Promise<User> {
		const repository = new UserRepository(db)
		return repository.createUser(payload)
	}
}
