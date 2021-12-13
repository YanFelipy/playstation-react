import * as Yup from 'yup'

import User from '../models/User'

class SessionController {
    async store(request, response) {

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        })

          const incorrectToken = () => response
           .status(401)
           .json({ error: 'Make sure your password or email are correct' })

        if (!(await schema.isValid(request.body))) incorrectToken()
            
        const { email, password } = request.body

        const user = await User.findOne({
            where: { email },

        })

        if (!user) incorrectToken()

        if (!(await user.checkPassword(password))) incorrectToken()


        return response.json({ id: user.id, email, name: user.name })

    }
}

export default new SessionController()
