import { HttpStatusEnum } from 'elysia-http-status-code/status'
import { t } from 'elysia'

export const globalErrorHandler = ({
	set,
	error,
	code,
}: {
	set: Record<string, any>
	error: any
	code: string
}) => {
	switch (code) {
		case 'UNPROCESSABLE_ENTITY':
			set.status = HttpStatusEnum.HTTP_422_UNPROCESSABLE_ENTITY
			return {
				message: error.message,
				code: HttpStatusEnum.HTTP_422_UNPROCESSABLE_ENTITY,
			}
		case 'AUTHORIZATION_ERROR':
			set.status = HttpStatusEnum.HTTP_403_FORBIDDEN
			return {
				message: error.message,
				code: HttpStatusEnum.HTTP_403_FORBIDDEN,
			}
		case 'AUTHENTICATION_ERROR':
			set.status = HttpStatusEnum.HTTP_401_UNAUTHORIZED
			return {
				message: error.message,
				code: HttpStatusEnum.HTTP_401_UNAUTHORIZED,
			}
		case 'BAD_REQUEST':
			set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST
			return {
				message: error.message,
				code: HttpStatusEnum.HTTP_400_BAD_REQUEST,
			}
		case 'NOT_FOUND':
			set.status = HttpStatusEnum.HTTP_404_NOT_FOUND
			return {
				message: error.message,
				code: HttpStatusEnum.HTTP_404_NOT_FOUND,
			}

		default:
			const dataBaseError = dataBaseErrorsHandler(error, set)
			if (dataBaseError) {
				return dataBaseError
			}
			set.status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR
			return {
				message: 'Internal server error',
				code: HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR,
			}
	}
}

const dataBaseErrorsHandler = (error: any, set: Record<string, any>) => {
	if (error.code === 'P2002') {
		console.log(error.meta)
		set.status = HttpStatusEnum.HTTP_409_CONFLICT
		return {
			message: `duplicate unique data on fields: ${JSON.stringify(
				error.meta,
			).replace(/"/g, '')}`,
			code: HttpStatusEnum.HTTP_409_CONFLICT,
		}
	}
	if (error.code === 'P2025') {
		set.status = HttpStatusEnum.HTTP_404_NOT_FOUND
		return {
			message: 'Data not found',
			code: HttpStatusEnum.HTTP_404_NOT_FOUND,
		}
	}
	if (error.code === 'P2020') {
		set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST
		return {
			message: 'Invalid data',
			code: HttpStatusEnum.HTTP_400_BAD_REQUEST,
		}
	}
	if (error.code === 'P2021') {
		set.status = HttpStatusEnum.HTTP_400_BAD_REQUEST
		return {
			message: 'Invalid data',
			code: HttpStatusEnum.HTTP_400_BAD_REQUEST,
		}
	}
}
