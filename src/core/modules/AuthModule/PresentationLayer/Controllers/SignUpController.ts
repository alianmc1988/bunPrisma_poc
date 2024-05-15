import { SignUpDTO } from '../DTOs/SignUpDTO'
import { singUpUserUsecase } from '../../AplicationLayer/UseCases/SingUpUserUsecase'
import { UserRepositoryAdapter } from '../InfrastructureLayer/Repository/UserRepositoryAdapter'
import { UserRepository } from '../../../UserModule/InfrastructureLayer/UserRepository'
import { PrismaClient } from '@prisma/client'

export const signUpController = ({
	body,
	db,
}: {
	body: SignUpDTO
	db: PrismaClient
}) => {
	console.log('Creating user...')
	return singUpUserUsecase(body, UserRepositoryAdapter, db)
}
