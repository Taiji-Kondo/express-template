import { Users } from '../../models/user/Users'
import { Repository } from '../Repository'
import { UsersParams } from '../../types/user/Users'

export class UserRepository extends Repository<Users> {
  constructor() {
    super(new Users())
  }

  async getUsers(): Promise<Users[]> {
    const connection = await this.createConnection()
    const users = await connection.getRepository(Users).find()
    await connection.close()
    return users
  }

  async createUser(_user: UsersParams): Promise<void> {
    const connection = await this.createConnection()
    const user = _user
    await connection.getRepository(Users).save(user)
    await connection.close()
  }

  async deleteUser(_id: number): Promise<void> {
    const connection = await this.createConnection()
    await connection
      .createQueryBuilder()
      .delete()
      .from(Users)
      .where('id = :id', { id: _id })
      .execute()
    await connection.close()
  }
}
