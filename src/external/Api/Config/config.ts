import Bun from 'bun'
import { Elysia } from 'elysia'
import { IConfig } from './IConfig'

export const config: IConfig = {
	port: Bun.env.PORT ? parseInt(Bun.env.PORT) : 3000,
}

const configuration = new Elysia().decorate('config', config)

export default configuration
