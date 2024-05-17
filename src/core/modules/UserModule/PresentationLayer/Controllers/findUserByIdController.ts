import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { findUserByIdUsecase } from '../../AplicationLayer/UseCases/FindUserByIdUsecase'

export const findUserByIdController = async ({
	params,
}: {
	params: { id: string }
}) => {
	const repository = new UserRepository()
	return findUserByIdUsecase(repository, params.id)
}
