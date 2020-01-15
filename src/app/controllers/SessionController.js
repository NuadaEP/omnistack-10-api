const User = require('../models/UserModel')

class SessionController {
  async index(req, res) {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user)
      return res
        .status(400)
        .json({ message: 'User not found' })

    if (!(await user.compareHash(password)))
      return res
        .status(400)
        .json({ message: 'Invalid password' })

    return res.json({ token: User.generateToken(user) })
  }
}

module.exports = new SessionController().index
