import { ErrorTypeEnum } from './errorTypeEnum'

interface ErrorsRecord {
	[key: string]: Record<string, string>
}

const messages: ErrorsRecord = {
	[ErrorTypeEnum.BAD_REQUEST_ERROR]: {
		ID_REQUIRED: 'Id is required',
	},
	[ErrorTypeEnum.AUTHORIZATION_ERROR]: {
		USER_NOT_FOUND: 'User not found',
	},
	[ErrorTypeEnum.AUTHENTICATION_ERROR]: {
		INVALID_CREDENTIALS: 'Invalid credentials',
	},
	[ErrorTypeEnum.INTERNAL_SERVER_ERROR]: {
		INTERNAL_SERVER_ERROR: 'Internal server error',
	},
	[ErrorTypeEnum.UNPROCESSABLE_ENTITY_ERROR]: {
		INVALID_EMAIL: 'Invalid email',
		DUPLICATED_KEY: 'Duplicated key',
	},
}

export const getErrorMessage = (
	errorType: ErrorTypeEnum,
	errorKey: string,
): string => {
	return messages[errorType][errorKey]
}
