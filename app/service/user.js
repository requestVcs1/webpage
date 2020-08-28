'use strict'

const Service = require('egg').Service
const { Sign } = require('../plugins/JWT')
class UserService extends Service {
  // 注册
  async register({ username, password, phone }) {
    const { app } = this
    // 判断用户名是否存在
    const isHave = await app.mysql.get('user', { username })
    // 不存在插入新用户数据
    if (!isHave) {
      const result = await app.mysql.insert('user', {
        username,
        password,
        phone,
      })
      return result.affectedRows
        ? { message: '注册成功', code: 200 }
        : { message: '注册失败', code: 401 }
    } else {
      // 存在返回mes
      return {
        message: '用户名已存在',
        code: 401,
      }
    }
  }
  // 登录
  async login({ username, password }) {
    const { app, ctx } = this
    const isHave = await app.mysql.get('user', { username, password })
    if (isHave) {
      const token = Sign({ username, password })
      ctx.cookies.set('token', token, {
        maxAge: 1000 * 60 * 5,
        encrypt: true,
      })
      return { message: '登录成功', token, code: 200 }
    } else return { message: '账户或密码有误', code: 401 }
  }
}

module.exports = UserService
