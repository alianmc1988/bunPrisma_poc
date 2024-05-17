import { PrismaClient, User } from '@prisma/client'
import { CreateUserDTO } from '../PresentationLayer/DTOs/CreateUsersDTO'
import { UpdateUserDTO } from '../PresentationLayer/DTOs/UpdateUserDTO'
import { IQuery } from '../PresentationLayer/DTOs/ListUsersDTO'

export interface IUserRepository {
	db: PrismaClient
	listUsers(query: IQuery): Promise<Array<any>>
	createUser(payload: CreateUserDTO): Promise<User>
	updateUser(id: string, payload: UpdateUserDTO): Promise<User>
	deleteUser(id: string): Promise<string>
	findUserById(id: string): Promise<User>
	findUserByEmail(email: string): Promise<User>
	updateUserToken(id: string, payload: { token: string }): Promise<User>
}
