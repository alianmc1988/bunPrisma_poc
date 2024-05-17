import { AuthenticationError } from '../../../../shared/errors/AuthenticationError'
import { IJwt } from '../../../../shared/IJwt'
import { SignInDTO } from '../../PresentationLayer/DTOs/SignInDTO'
import { IUserRepositoryAdapter } from '../../PresentationLayer/InfrastructureLayer/Repository/IUserRepositoryAdapter'

export const signInUserUsecase = async (
	payload: SignInDTO,
	userRepo: IUserRepositoryAdapter,
	jwt: IJwt,
) => {
	const user = await userRepo.findUserByEmail(payload.email)
	if (!user) {
		throw new AuthenticationError('User not found')
	}
	if (user.password !== payload.password) {
		throw new AuthenticationError('Invalid password')
	}

	const token = await jwt.sign(
		{
			id: user.id,
			email: user.email,
		},
		process.env.JWT_SECRET || 'secret',
		{
			expiresIn: '1h',
		},
	)

	const userWithToken = await userRepo.updateUserToken(
		user.id,
		{ token },
		userRepo,
	)

	return userWithToken
}
