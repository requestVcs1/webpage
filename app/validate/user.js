module.exports = (app) => {
  let { validator } = app
  // 校验用户名是否正确
  validator.addRule('userName', (rule, value) => {
    if (!/^[a-zA-Z0-9_-]{4,16}$/.test(value)) {
      return '4到16位（字母，数字，下划线，减号）'
    }
  })

  // 验证密码
  validator.addRule('password', (rule, value) => {
    if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)) {
      return '密码至少包含 数字和英文，长度6-20'
    }
  })
  // 手机号码
  validator.addRule('phone', (rule, value) => {
    if (!/^1[3456789]\d{9}$/.test(value)) {
      return '手机号码有误'
    }
  })
}
