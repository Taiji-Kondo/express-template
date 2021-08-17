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

  async getUser(_id: number): Promise<ResponseType<UserType[]>> {
    const connection = await this.createConnection()
    try {
      const user = await connection.getRepository(Users).findOne(_id)
      return { data: user ? [user] : [] }
    } catch (err) {
      return { data: err }
    } finally {
      await connection.close()
    }
  }

  async createUser(_user: UserType): Promise<ResponseType<string>> {
    const connection = await this.createConnection()
    // if create relational data
    // const user = _user.user
    // user.hobby = _user.hobby
    try {
      await connection.getRepository(Users).save(_user)
      return { data: 'success' }
    } catch (err) {
      return { data: err }
    } finally {
      await connection.close()
    }
  }

  // if need update
  // async updateUser(_id: number, _user: UserType): Promise<ResponseType<string>> {
  //   const connection = await this.createConnection()
  //   const user = { id: _id, ..._user.user }
  //   user.mountainDetail = _user.hobby
  //
  //   try {
  //     const userHobby = await connection
  //       .getRepository(Users)
  //       .findOne(_id, { relations: ['userHobby'] })
  //     if (userHobby) {
  //       user.mountainDetail.id = userHobby?.id
  //     }
  //     await connection.getRepository(Users).save(user)
  //     return { data: 'success' }
  //   } catch (err) {
  //     return { data: err }
  //   } finally {
  //     await connection.close()
  //   }
  // }

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
