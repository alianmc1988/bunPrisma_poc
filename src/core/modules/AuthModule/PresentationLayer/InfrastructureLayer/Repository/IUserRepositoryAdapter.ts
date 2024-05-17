import { UserRepository } from './../../../../UserModule/InfrastructureLayer/UserRepository'
import { PrismaClient, User } from '@prisma/client'
import { SignUpDTO } from '../../DTOs/SignUpDTO'
import { SignInDTO } from '../../DTOs/SignInDTO'
import { IUserRepository } from '../../../../UserModule/InfrastructureLayer/IUserRepository'

export interface IUserRepositoryAdapter {
	userRepository: IUserRepository
	createUser(payload: SignUpDTO): Promise<User>
	findUserByEmail(email: string): Promise<User>
	updateUserToken(
		id: string,
		payload: {
			token: string
		},
		userRepo: IUserRepositoryAdapter,
	): Promise<User>
}
