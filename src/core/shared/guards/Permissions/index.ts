import { Elysia } from 'elysia'
import { AuthenticationError } from '../../errors/AuthenticationError'

let permission = 20

export const tokenVerifierPlugin = new Elysia()
	.onBeforeHandle({ as: 'global' }, ({ headers }: { headers: any }) => {
		const { authorization } = headers
		tokenVerifier({ authorization })
	})
	.decorate('permission', permission)

const tokenVerifier = ({ authorization }: { authorization: any }) => {
	const token = authorization
	if (!token) {
		throw new AuthenticationError('User is not authenticated')
	}
}

const validateAuthorization = ({ authorization }: { authorization: any }) => {
	const token = authorization.split(' ')[1]
	if (!token) {
		throw new AuthenticationError('User is not authenticated')
	}

	return token
}
