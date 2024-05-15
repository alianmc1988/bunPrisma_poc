import app from './external/Api/app'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
})

const PORT = process.env.PORT || 3000

app.decorate('db', prisma)

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
