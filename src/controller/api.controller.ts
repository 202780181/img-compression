import {
  Inject,
  Controller,
  Get,
  Query,
  Post,
  Body,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { ParseService } from '../service/parse.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;
  parseService: ParseService;

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Post('/parse')
  async parseImage(@Body('file') file) {
    console.log(file);
    // const buffer = await this.parseService.parseImg('');

    return { code: 0, status: 200, message: 'OK' };
  }
}
