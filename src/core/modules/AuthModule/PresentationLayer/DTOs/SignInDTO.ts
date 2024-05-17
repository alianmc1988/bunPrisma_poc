import { IJwt } from '../../../../shared/IJwt'
import { CreateUserDTO } from '../../../UserModule/PresentationLayer/DTOs/CreateUsersDTO'

export interface SignInDTO extends CreateUserDTO {}

export interface SignInPayloadDTO {
	body: SignInDTO
	jwt: IJwt
}
