import { PrismaClient } from '@prisma/client'
import { UpdateUserDTO } from './../DTOs/UpdateUserDTO'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { updateUserUsecase } from '../../AplicationLayer/UseCases/UpdateUserUsecase'

export const updateUserController = async ({
	db,
	body,
	params: { id },
}: {
	db: PrismaClient
	body: UpdateUserDTO
	params: { id: string }
}) => {
	const repository = new UserRepository(db)
	return updateUserUsecase(repository, id, body)
}
