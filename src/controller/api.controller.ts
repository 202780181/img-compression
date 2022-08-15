import {
  Inject,
  Controller,
  Get,
  Query,
  Post,
  Files,
} from '@midwayjs/decorator';
const fs = require('fs');
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { ParseService } from '../service/parse.service';
import { resolve } from '../../utils/common';

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
  async parseImage(@Files() file) {
    const sava_path = resolve() + '/static' + '/image/' + file[0].filename;

    const file_body = fs.readFileSync(file[0].data);
    fs.writeFile(sava_path, file_body, err => {
      if (err) return { err };
    });
    return { code: 0, status: 200, data: file_body, message: 'OK' };
  }
}
