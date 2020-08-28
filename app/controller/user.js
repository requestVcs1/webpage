'use strict'

const { CAPTCHA } = require('../plugins/createCAPTCHA')

const Controller = require('egg').Controller
class UserController extends Controller {
  // 获取验证码
  async getCAPTCHA() {
    const { ctx } = this
    const code = CAPTCHA(6)
    ctx.session.code = code
    ctx.body = code
  }
  // 注册
  async register() {
    const { ctx } = this
    const body = ctx.request.body
    ctx.validate({ username: 'userName', password: 'password', phone: 'phone' })
    const result = await ctx.service.user.register(body)
    ctx.body = result
  }
  // 登录
  async login() {
    const { ctx } = this
    const body = ctx.request.body
    const result = await ctx.service.user.login(body)
    ctx.body = result
  }
}

module.exports = UserController
