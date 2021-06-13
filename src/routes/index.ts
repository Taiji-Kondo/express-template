import Express from 'express'
import userRouter from '../routes/userRoutes'
import { createConnection, getConnectionOptions, BaseEntity } from 'typeorm'
import { Users } from '../models/Users'

const router = Express.Router()

router.get('/', ({ res }) => {
  res?.send({ title: 'index' })
})
router.get('/test', async (req, res) => {
  const connectionOptions = await getConnectionOptions('default')
  const connection = await createConnection(connectionOptions)
  BaseEntity.useConnection(connection)

  console.log(req)
  const user = new Users()
  user.name = 'Qiita'
  user.age = 25
  await connection.getRepository(Users).save(user)
  const users = await connection.getRepository(Users).find()
  res.send(users)
})
router.use('/users', userRouter)

export default router
