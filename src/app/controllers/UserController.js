const UserValidator = require('../validators/UserValidator')
const User = require('../models/UserModel')

class UserController {
  async show(req, res) {
    const { _id: user_id } = res.locals.user

    return res.send({ user_id })
  }

  async store(req, res) {
    try {
      if (!(await UserValidator(req.body, 'store')))
        return res
          .status(400)
          .json({ message: 'Validation fails' })

      const { username } = req.body

      if (await User.findOne({ username }))
        return res
          .status(400)
          .json({ message: 'User is already in use' })

      return res.json(await User.create(req.body))
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new UserController()
