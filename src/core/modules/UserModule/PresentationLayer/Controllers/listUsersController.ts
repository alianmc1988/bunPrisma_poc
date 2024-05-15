import { PrismaClient } from '@prisma/client'
import { listUsersUsecase } from '../../AplicationLayer/UseCases/ListUserUsecase'
import { UserRepository } from '../../InfrastructureLayer/UserRepository'

export const listUsersController = ({ db }: { db: PrismaClient }) => {
	const repository = new UserRepository(db)
	return listUsersUsecase(repository)
}
