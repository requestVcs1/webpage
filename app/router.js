'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
const path = require('path')
module.exports = (app) => {
  const { router, controller } = app
  const directory = path.join(app.config.baseDir, 'app/validate')
  app.loader.loadToApp(directory, 'validate')
  router.get('/getCAPTCHA', controller.user.getCAPTCHA) // 获取验证码
  router.post('/register', controller.user.register) // 注册
  router.post('/login', controller.user.login) // 登录
}
