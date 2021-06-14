import { Get, JsonController } from 'routing-controllers'
import { Users } from '../models/Users'

@JsonController()
class UserController {
  @Get('/users')
  getAll() {
    return Users
  }
}

export default UserController
