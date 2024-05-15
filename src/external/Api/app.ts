import { Elysia } from 'elysia'
import routerV1 from './Router/index'
import Config from './Config/config'
import cors from '@elysiajs/cors'

const app = new Elysia()
app.use(cors())
app.use(Config)
app.use(routerV1)

export default app
