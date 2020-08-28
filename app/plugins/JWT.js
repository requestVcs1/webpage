const jwt = require('jsonwebtoken')

exports.Sign = function (data) {
  return jwt.sign(
    {
      data,
    },
    'LuoJing',
    { expiresIn: 60 * 60 }
  )
}
exports.Verify = function (token) {
  return jwt.verify(token, 'LuoJing', function (err, decoded) {
    return decoded // bar
  })
}
