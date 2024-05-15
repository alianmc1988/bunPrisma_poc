import { User } from '@prisma/client'
import { IUserRepository } from '../../InfrastructureLayer/IUserRepository'

export const findUserByIdUsecase = async (
	UserRepository: IUserRepository,
	id: string,
): Promise<User> => {
	return UserRepository.findUserById(id)
}
