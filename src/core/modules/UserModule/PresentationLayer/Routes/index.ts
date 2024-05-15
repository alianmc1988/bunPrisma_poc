import Elysia from 'elysia'
import { UserRoutesProtected } from './protectedUserRoutes'
import bearer from '@elysiajs/bearer'
import { requestID } from 'elysia-requestid'

export const UserRoutes = new Elysia({
	prefix: '/user',
	name: 'UserRouter',
})
	.use(bearer())
	.use(requestID())
	.get('/reqId', ({ bearer }) => {
		console.log(bearer)
	})
	.guard((app) => app.use(UserRoutesProtected))
