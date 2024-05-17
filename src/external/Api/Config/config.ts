import Bun from 'bun'
import { Elysia } from 'elysia'
import { IConfig } from './IConfig'

export const config: IConfig = {
	port: Bun.env.PORT ? parseInt(Bun.env.PORT) : 3000,
	jwtConfig: {
		secret: Bun.env.JWT_SECRET || 'secret',
		name: 'jwt',
		exp: Bun.env.JWT_EXPIRES_IN || '1h',
	},
}

const configuration = new Elysia().decorate('config', config)

export default configuration
