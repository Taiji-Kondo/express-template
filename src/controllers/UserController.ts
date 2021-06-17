import { Body, Delete, Get, JsonController, Param, Post } from 'routing-controllers'
import { UserRepository } from '../repositories/UserRepository'
import { Users } from '../models/Users'
import { UsersParams } from '../types/Users'

@JsonController('/users')
export class UserController extends UserRepository {
  @Get('/')
  async getAll(): Promise<Users[]> {
    const response = await this.getUsers()
    return response
  }

  @Post('/create')
  async create(@Body() user: UsersParams): Promise<void> {
    await this.createUser(user)
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.deleteUser(id)
  }
}
