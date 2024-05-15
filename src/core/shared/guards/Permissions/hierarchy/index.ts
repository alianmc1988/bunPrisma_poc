import { ApiNumericalRoles, ApiRoles } from '../roles'

export const ApiRoleHierarchy = {
	[ApiRoles.SUDO]: [ApiRoles.ADMIN, ApiRoles.USER],
	[ApiRoles.ADMIN]: [ApiRoles.USER],
	[ApiRoles.USER]: [],
}

export const ApiRoleNumericalHierarchy = {
	[ApiRoles.SUDO]: [ApiNumericalRoles.ADMIN, ApiNumericalRoles.USER],
	[ApiRoles.ADMIN]: [ApiNumericalRoles.USER],
	[ApiRoles.USER]: [],
}

export const getApiRoleHierarchy = (role: ApiRoles) => {
	return ApiRoleHierarchy[role]
}

export const getApiRoleNumericalHierarchy = (role: ApiRoles) => {
	return ApiRoleNumericalHierarchy[role] || []
}
