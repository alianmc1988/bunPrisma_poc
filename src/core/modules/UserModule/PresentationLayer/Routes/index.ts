import Elysia from 'elysia'
import bearer from '@elysiajs/bearer'
import { requestID } from 'elysia-requestid'
import jwt from '@elysiajs/jwt'
import { AuthGuard } from '../../../../shared/guards/Authentication/AuthGuard'
import { listUsersController } from '../Controllers/listUsersController'
import { findUserByIdController } from '../Controllers/findUserByIdController'
import { updateUserController } from '../Controllers/updateUserController'
import { deleteUserController } from '../Controllers/deleteUserController'

export const UserRoutes = new Elysia({
	prefix: '/user',
	name: 'UserRouter',
})
	.use(bearer())
	.use(requestID())
	.get('/', listUsersController)
	.get('/:id', findUserByIdController)
	.put('/:id', updateUserController)
	.delete('/:id', deleteUserController)
