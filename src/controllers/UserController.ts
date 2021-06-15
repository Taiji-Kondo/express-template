import { Controller, Get, JsonController } from 'routing-controllers'
import { Users } from '../models/Users'

@JsonController()
@Controller('/users')
export class UserController {
  @Get('/')
  getAll() {
    return Users
  }
}
