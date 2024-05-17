import { IUserRepository } from '../../InfrastructureLayer/IUserRepository'
import { IQuery } from '../../PresentationLayer/DTOs/ListUsersDTO'

export const listUsersUsecase = async (
	UserRepository: IUserRepository,
	query: IQuery,
) => {
	return UserRepository.listUsers(query)
}
