import { CreateUserDTO, CreateUserDTOPayload } from '../DTOs/CreateUsersDTO'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { createUserUsecase } from '../../AplicationLayer/UseCases/CreateUserUsecase'

export const createUserController = (payload: CreateUserDTOPayload) => {
	const { body } = payload
	const repo = new UserRepository()
	return createUserUsecase(body, repo)
}
