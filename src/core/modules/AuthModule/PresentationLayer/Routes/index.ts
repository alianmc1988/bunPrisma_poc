import Elysia from 'elysia'
import { signUpController } from '../Controllers/SignUpController'

export const AuthRoutes = new Elysia({
	prefix: '/auth',
	name: 'AuthenticationRouter',
}).post('/signUp', signUpController)
