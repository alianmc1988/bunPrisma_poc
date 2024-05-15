import { PrismaClient } from '@prisma/client'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'
import { findUserByIdUsecase } from '../../AplicationLayer/UseCases/FindUserByIdUsecase'

export const findUserByIdController = async ({
	params,
	db,
}: {
	params: { id: string }
	db: PrismaClient
}) => {
	const repository = new UserRepository(db)
	return findUserByIdUsecase(repository, params.id)
}
