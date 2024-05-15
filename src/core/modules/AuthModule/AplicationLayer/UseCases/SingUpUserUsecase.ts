import { PrismaClient } from '@prisma/client'
import { SignUpDTO } from '../../PresentationLayer/DTOs/SignUpDTO'
import { IUserRepositoryAdapter } from '../../PresentationLayer/InfrastructureLayer/Repository/IUserRepositoryAdapter'

export const singUpUserUsecase = async (
	payload: SignUpDTO,
	repository: IUserRepositoryAdapter,
	db: PrismaClient,
) => {
	return repository.createUser(db, payload)
}
