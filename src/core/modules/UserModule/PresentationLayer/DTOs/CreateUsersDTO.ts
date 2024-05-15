import { PrismaClient } from '@prisma/client'

export interface CreateUserDTO {
	email: string
	password: string
}

export interface CreateUserDTOPayload {
	body: CreateUserDTO
	db: PrismaClient
}
