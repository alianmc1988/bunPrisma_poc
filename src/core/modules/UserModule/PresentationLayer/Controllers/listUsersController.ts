import { IQuery } from './../DTOs/ListUsersDTO'
import { listUsersUsecase } from '../../AplicationLayer/UseCases/ListUserUsecase'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'

export const listUsersController = ({ query }: { query: IQuery }) => {
	const repository = new UserRepository()
	return listUsersUsecase(repository, query)
}
