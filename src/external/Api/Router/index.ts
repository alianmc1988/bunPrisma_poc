import Elysia from 'elysia'
import { UnprocessableEntityError } from '../../../core/shared/errors/UnprocessableEntityError'
import { AuthorizationError } from '../../../core/shared/errors/AuthorizationError'
import { AuthenticationError } from '../../../core/shared/errors/AuthenticationError'
import { BadRequestError } from '../../../core/shared/errors/BadRequestError'
import { globalErrorHandler } from '../Middlewares/globalErrorHandler'
import { UserRoutes } from '../../../core/modules/UserModule/PresentationLayer/Routes'
import { AuthRoutes } from '../../../core/modules/AuthModule/PresentationLayer/Routes'
import { DatabaseError } from '../../../core/shared/errors/DatabaseError'
import { requestID } from 'elysia-requestid'
import { NotFoundError } from '../../../core/shared/errors/NotFoundError'
import swagger from '@elysiajs/swagger'

const basePath = '/api/v1'

const RouterV1 = new Elysia({
	prefix: basePath,
	name: 'routerV1',
})

RouterV1.error('UNPROCESSABLE_ENTITY', UnprocessableEntityError)
	.error('AUTHORIZATION_ERROR', AuthorizationError)
	.error('AUTHENTICATION_ERROR', AuthenticationError)
	.error('BAD_REQUEST', BadRequestError)
	.error('INTERNAL_SERVER_ERROR', Error)
	.error('DATABASE_ERROR', DatabaseError)
	.error('NOT_FOUND', NotFoundError)
	.onError(globalErrorHandler)
	.use(swagger())
	.use(UserRoutes)
	.use(AuthRoutes)

export default RouterV1
