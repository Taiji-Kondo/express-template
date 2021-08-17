import { Body, Delete, Get, JsonController, Param, Post } from 'routing-controllers'
import { UserRepository } from '../../repositories/user/UserRepository'
import { UserType } from '../../types/user/Users'
import { ResponseType } from '../../types/ResponseType'

@JsonController('/users')
export class UserController {
  private readonly userRepository = new UserRepository()

  @Get('/')
  async getAll(): Promise<ResponseType<UserType[]>> {
    const response = await this.userRepository.getUsers()
    return response
  }

  @Post('/create')
  async create(@Body() user: UserType): Promise<ResponseType<string>> {
    const response = await this.userRepository.createUser(user)
    return response
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number): Promise<ResponseType<string>> {
    const response = await this.userRepository.deleteUser(id)
    return response
  }
}
