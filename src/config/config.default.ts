import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1659696868724_3590',
  koa: {
    port: 7001,
  },
  cors: {
    credentials: false,
  },
} as MidwayConfig;
