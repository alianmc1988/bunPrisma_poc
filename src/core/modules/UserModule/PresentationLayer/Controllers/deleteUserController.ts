import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { deleteUserUsecase } from '../../AplicationLayer/UseCases/DeleteUserUsecase'
export const deleteUserController = async ({
	params: { id },
}: {
	params: { id: string }
}) => {
	const repository = new UserRepository()
	return deleteUserUsecase(repository, id)
}
