import { UserRepositoryAdapter } from '../InfrastructureLayer/Repository/UserRepositoryAdapter'
import { SignInDTO } from '../DTOs/SignInDTO'
import { IJwt } from '../../../../shared/IJwt'
import { signInUserUsecase } from '../../AplicationLayer/UseCases/SignInUsecase'

export const signInController = async ({
	body,
	jwt,
}: {
	body: SignInDTO
	jwt: IJwt
}) => {
	console.log('body', body)
	const userRepositoryAdapter = new UserRepositoryAdapter()
	console.log('body', body)

	const data = await signInUserUsecase(body, userRepositoryAdapter, jwt)
	return data
}
