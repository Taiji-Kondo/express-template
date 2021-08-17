import { Body, Delete, Get, JsonController, Param, Post } from 'routing-controllers'
import { UserRepository } from '../../repositories/user/UserRepository'
import { Users } from '../../models/user/Users'
import { UsersParams } from '../../types/user/Users'

@JsonController('/users')
export class UserController {
  private readonly userRepository = new UserRepository()

  @Get('/')
  async getAll(): Promise<Users[]> {
    const response = await this.userRepository.getUsers()
    return response
  }

  @Post('/create')
  async create(@Body() user: UsersParams): Promise<void> {
    await this.userRepository.createUser(user)
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.userRepository.deleteUser(id)
  }
}
