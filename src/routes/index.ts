import Express from 'express'
import userRouter from '../routes/userRoutes'

const router = Express.Router()

router.get('/', ({ res }) => {
  res?.send({ title: 'index' })
})
router.use('/users', userRouter)

export default router
