import { SignUpDTO } from '../DTOs/SignUpDTO'
import { singUpUserUsecase } from '../../AplicationLayer/UseCases/SingUpUserUsecase'
import { UserRepositoryAdapter } from '../InfrastructureLayer/Repository/UserRepositoryAdapter'

export const signUpController = ({ body }: { body: SignUpDTO }) => {
	console.log('Creating user...')
	const userRepositoryAdapter = new UserRepositoryAdapter()
	return singUpUserUsecase(body, userRepositoryAdapter)
}
