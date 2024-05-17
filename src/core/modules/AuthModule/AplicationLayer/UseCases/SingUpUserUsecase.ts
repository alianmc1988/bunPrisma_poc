import { SignUpDTO } from '../../PresentationLayer/DTOs/SignUpDTO'
import { IUserRepositoryAdapter } from '../../PresentationLayer/InfrastructureLayer/Repository/IUserRepositoryAdapter'

export const singUpUserUsecase = async (
	payload: SignUpDTO,
	repository: IUserRepositoryAdapter,
) => {
	return repository.createUser(payload)
}
