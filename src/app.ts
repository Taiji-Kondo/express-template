import 'reflect-metadata'
import bodyParser from 'body-parser'
import { createExpressServer } from 'routing-controllers'
import dotenv from 'dotenv'
import { UserController } from './controllers/user/UserController'
dotenv.config()

const PORT = process.env.APP_PORT

const APP = createExpressServer({
  routePrefix: '/api',
  controllers: [UserController],
})

APP.use(bodyParser.json())

APP.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
