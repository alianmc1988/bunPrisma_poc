import Elysia from 'elysia'
import { signUpController } from '../Controllers/SignUpController'
import { signInController } from '../Controllers/SignInController'

export const AuthRoutes = new Elysia({
	prefix: '/auth',
	name: 'AuthenticationRouter',
})
	.post('/signUp', signUpController)
	.post('/signIn', signInController)
