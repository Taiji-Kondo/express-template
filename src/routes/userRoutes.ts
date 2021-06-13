import Express from 'express'
import userController from '../controllers/usersController'

const userRouter = Express.Router()

userRouter.get('/', userController.index)

export default userRouter
