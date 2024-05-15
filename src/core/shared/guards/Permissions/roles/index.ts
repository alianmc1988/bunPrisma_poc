export enum ApiRoles {
	SUDO = 'SUDO',
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export enum ApiNumericalRoles {
	SUDO = 0,
	ADMIN = 1,
	STAFF = 10,
	USER = 20,
}

export const getApiNumericalRole = (role: ApiRoles): Number => {
	return ApiNumericalRoles[role]
}
