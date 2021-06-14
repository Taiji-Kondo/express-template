import 'reflect-metadata'
import Express from 'express'
import bodyParser from 'body-parser'
import { useExpressServer } from 'routing-controllers'
import dotenv from 'dotenv'
import UserController from './controllers/UserController'
dotenv.config()

const PORT = process.env.APP_PORT

const bootstrap = async () => {
  const app = Express()

  app.use(bodyParser.json())

  useExpressServer(app, {
    routePrefix: '/api',
    controllers: [UserController],
  })

  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })
}

bootstrap()
