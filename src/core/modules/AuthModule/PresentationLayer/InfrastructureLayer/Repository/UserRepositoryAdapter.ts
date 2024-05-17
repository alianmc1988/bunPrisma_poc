import { SignUpDTO } from '../../DTOs/SignUpDTO'
import { IUserRepositoryAdapter } from './IUserRepositoryAdapter'
import { UserRepository } from '../../../../UserModule/InfrastructureLayer/UserRepository'
import { User } from '@prisma/client'
import { IUserRepository } from '../../../../UserModule/InfrastructureLayer/IUserRepository'

export class UserRepositoryAdapter implements Partial<IUserRepositoryAdapter> {
	readonly userRepository: IUserRepository = new UserRepository()
	constructor() {
		this.userRepository = new UserRepository()
	}

	async createUser(payload: SignUpDTO): Promise<User> {
		return this.userRepository.createUser(payload)
	}

	async findUserByEmail(email: string): Promise<User> {
		return this.userRepository.findUserByEmail(email)
	}

	async updateUserToken(
		id: string,
		payload: {
			token: string
		},
	): Promise<User> {
		return this.userRepository.updateUserToken(id, payload)
	}
}
