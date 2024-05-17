import Elysia from 'elysia'
import { AuthenticationError } from '../../errors/AuthenticationError'

let userEmail = ''
export const AuthGuard = new Elysia().onBeforeHandle(
	{ as: 'global' },
	async ({ jwt, bearer }) => {
		const result = await jwt.verify(bearer)
		const { email } = result
		if (!result) {
			throw new AuthenticationError('Not Authenticated')
		}
		userEmail = email
	},
)
