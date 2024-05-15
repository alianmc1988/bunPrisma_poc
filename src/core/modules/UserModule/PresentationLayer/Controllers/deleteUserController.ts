import { PrismaClient } from '@prisma/client'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { deleteUserUsecase } from '../../AplicationLayer/UseCases/DeleteUserUsecase'
export const deleteUserController = async ({
	params: { id },
	db,
}: {
	params: { id: string }
	db: PrismaClient
}) => {
	const repository = new UserRepository(db)
	return deleteUserUsecase(repository, id)
}
