import { CreateUserDTO, CreateUserDTOPayload } from '../DTOs/CreateUsersDTO'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { createUserUsecase } from '../../AplicationLayer/UseCases/CreateUserUsecase'

export const createUserController = (payload: CreateUserDTOPayload) => {
	const { db, body } = payload
	const repo = new UserRepository(db)
	return createUserUsecase(body, repo)
}
