import { CreateUserDTO } from '../../PresentationLayer/DTOs/CreateUsersDTO'
import { IUserRepository } from '../../InfrastructureLayer/IUserRepository'

export const createUserUsecase = async (
	payload: CreateUserDTO,
	repository: IUserRepository,
) => {
	const user = await repository.createUser(payload)

	return user
}
