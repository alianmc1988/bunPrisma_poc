import { IUserRepository } from '../../InfrastructureLayer/IUserRepository'

export const listUsersUsecase = async (UserRepository: IUserRepository) => {
	return UserRepository.listUsers()
}
