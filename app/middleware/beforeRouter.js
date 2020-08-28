const { Verify } = require('../plugins/JWT')
module.exports = () => {
  const whiteList = ['/login', '/register']
  return async function beforeRouter(ctx, next) {
    const endIndex =
      ctx.url.indexOf('?') === -1 ? ctx.url.length : ctx.url.indexOf('?')
    const url = ctx.url.slice(0, endIndex)
    const token = ctx.header.token
    if (!whiteList.includes(url) || !whiteList.includes(ctx.url)) {
      if (token) {
        console.log(Verify(token))
        await next()
      } else {
        ctx.body = {
          message: '登录失效',
          code: 401,
        }
      }
    } else {
      await next()
    }
  }
}
