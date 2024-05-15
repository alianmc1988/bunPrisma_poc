import { IUserRepository } from '../../InfrastructureLayer/IUserRepository'

export const deleteUserUsecase = async (
	UserRepository: IUserRepository,
	id: string,
) => {
	return UserRepository.deleteUser(id)
}
