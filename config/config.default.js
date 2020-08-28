/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    // 配置数据库
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'db_chat',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    // 设置session过期时间
    session: {
      key: 'EGG_SESS',
      maxAge: 60 * 1000, // 1 天
      httpOnly: true,
      encrypt: true,
    },
    // 关闭csrf
    security: {
      csrf: {
        enable: false,
      },
    },
    validate: {
      // convert: true,
      // validateRoot: true,
    },
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598258542743_4667'

  // add your middleware config here
  config.middleware = ['errorHandler', 'beforeRouter']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
