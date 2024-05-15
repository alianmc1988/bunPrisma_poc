import { PrismaClient, User } from '@prisma/client'
import { SignUpDTO } from '../../DTOs/SignUpDTO'

export interface IUserRepositoryAdapter {
	createUser(db: PrismaClient, payload: SignUpDTO): Promise<User>
}
