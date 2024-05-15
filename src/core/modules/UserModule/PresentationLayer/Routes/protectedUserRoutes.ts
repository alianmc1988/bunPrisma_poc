import Elysia from 'elysia'
import { listUsersController } from '../Controllers/listUsersController'
import { findUserByIdController } from '../Controllers/findUserByIdController'
import { updateUserController } from '../Controllers/updateUserController'
import { deleteUserController } from '../Controllers/deleteUserController'

export const UserRoutesProtected = new Elysia()
	.get('/', listUsersController)
	.get('/:id', findUserByIdController)
	.put('/:id', updateUserController)
	.delete('/:id', deleteUserController)
