import Elysia from 'elysia'
import { tokenVerifierPlugin } from '../../../../shared/guards/Permissions'
import { UserRoutesProtected } from './protectedUserRoutes'
import { listUsersController } from '../Controllers/listUsersController'
import { PrismaClient } from '@prisma/client'
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
