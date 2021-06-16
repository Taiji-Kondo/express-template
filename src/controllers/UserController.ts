import { Get, JsonController } from 'routing-controllers'
import { Users } from '../models/Users'
import { createConnection, getConnectionOptions } from 'typeorm'

@JsonController('/users')
export class UserController {
  @Get('/')
  async getAll() {
    // TODO
    // connectionの設定を書いたクラスを継承して使い回す
    const connectionOptions = await getConnectionOptions('default')
    const connection = await createConnection(connectionOptions)
    const user = new Users()
    user.name = 'test'
    user.age = 24
    await connection.getRepository(Users).save(user)
    const users = await connection.getRepository(Users).find()
    return users
  }
}
