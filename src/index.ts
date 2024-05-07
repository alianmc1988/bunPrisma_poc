import { Elysia } from 'elysia'
import Config from './external/config'

const app = new Elysia().get('/', () => 'Hello Elysia').listen(Config.port)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
