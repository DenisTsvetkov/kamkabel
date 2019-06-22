const { User, UserAvatar } = require('../models');

exports.findAll = (req, res) => {
    User.findAll({
        include: 
            [
                {
                    model: UserAvatar,
                    attributes: ['avatar']
                }
            ]
        }
    )
    .then(users => {
        res.status(200).json({ result: { users }, error: null })
    })
    .catch(error => {
        res.status(404).json({ result: null, error })
    })
}

exports.create = ({ body: { chatId, username } }, res) => {

    User.create({ chatId, username })
    .then(user => {
        res.status(200).json({ result: { user }, error: null })
    })
    .catch(error => {
        res.status(404).json({ result: null, error: { detail: error.parent.constraint } })
    })
}