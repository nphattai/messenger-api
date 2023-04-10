import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private authService: ClientProxy) {}

  @Get('users')
  async getUser() {
    return this.authService.send(
      {
        cmd: 'get-user',
      },
      {},
    );
  }

  @Post('users')
  async createUser(@Body() body: any) {
    return this.authService.send({ cmd: 'create-user' }, body);
  }
}
