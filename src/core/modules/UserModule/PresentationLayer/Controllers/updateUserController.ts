import { UpdateUserDTO } from './../DTOs/UpdateUserDTO'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { updateUserUsecase } from '../../AplicationLayer/UseCases/UpdateUserUsecase'

export const updateUserController = async ({
	body,
	params: { id },
}: {
	body: UpdateUserDTO
	params: { id: string }
}) => {
	const repository = new UserRepository()
	return updateUserUsecase(repository, id, body)
}
