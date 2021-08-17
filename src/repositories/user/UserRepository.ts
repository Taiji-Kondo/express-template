import { Users } from '../../models/user/Users'
import { Repository } from '../Repository'
import { UserType } from '../../types/user/Users'
import { ResponseType } from '../../types/ResponseType'

export class UserRepository extends Repository<Users> {
  constructor() {
    super(new Users())
  }

  async getUsers(): Promise<ResponseType<UserType[]>> {
    const connection = await this.createConnection()
    try {
      const users = await connection.getRepository(Users).find()
      return { data: users }
    } catch (err) {
      return { data: err }
    } finally {
      await connection.close()
    }
  }

  async createUser(_user: UserType): Promise<ResponseType<string>> {
    const connection = await this.createConnection()
    try {
      const user = _user
      await connection.getRepository(Users).save(user)
      return { data: 'success' }
    } catch (err) {
      return { data: err }
    } finally {
      await connection.close()
    }
  }

  async deleteUser(_id: number): Promise<ResponseType<string>> {
    const connection = await this.createConnection()
    try {
      await connection
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where('id = :id', { id: _id })
        .execute()
      return { data: 'success' }
    } catch (err) {
      return { data: err }
    } finally {
      await connection.close()
    }
  }
}
