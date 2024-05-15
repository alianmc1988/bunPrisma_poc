import { ApiNumericalRoles, ApiRoles, getApiNumericalRole } from '../roles'

export enum ApiPermissions {
	READ = 'READ',
	WRITE = 'WRITE',
	DELETE = 'DELETE',
}

export const ApiRolePermissions = {
	[ApiRoles.SUDO]: [
		ApiPermissions.READ,
		ApiPermissions.WRITE,
		ApiPermissions.DELETE,
	],
	[ApiRoles.ADMIN]: [ApiPermissions.READ, ApiPermissions.WRITE],
	[ApiRoles.USER]: [ApiPermissions.READ],
}

export const ApiRoleNumericalPermissions = {
	[ApiRoles.SUDO]: [
		ApiPermissions.READ,
		ApiPermissions.WRITE,
		ApiPermissions.DELETE,
	],
	[ApiRoles.ADMIN]: [ApiPermissions.READ, ApiPermissions.WRITE],
	[ApiRoles.USER]: [ApiPermissions.READ],
}

export const getApiRolePermissions = (role: ApiRoles) => {
	return ApiRolePermissions[role]
}

export const getApiRoleNumericalPermissions = (role: ApiRoles) => {
	return ApiRoleNumericalPermissions[role] || []
}
