import { User } from '@prisma/client'
import { IUserRepository } from '../../InfrastructureLayer/IUserRepository'
import { UpdateUserDTO } from '../../PresentationLayer/DTOs/UpdateUserDTO'

export const updateUserUsecase = async (
	repository: IUserRepository,
	id: string,
	payload: UpdateUserDTO,
): Promise<User> => {
	return repository.updateUser(id, payload)
}
