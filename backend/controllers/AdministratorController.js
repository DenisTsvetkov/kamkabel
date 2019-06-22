const { Administrator, Avatar } = require('../models');

exports.findAll = (req, res) => {
    Administrator.findAll({
        include: 
            [
                {
                    model: Avatar,
                    // as: 'Avatar'
                }
            ]
        }
    )
    .then(administrators => {
        res.status(200).json({ result: { administrators }, error: null })
    })
    .catch(error => {
        res.status(404).json({ result: null, error })
    })
}

exports.create = ({ body: { name, surname } }, res) => {

    Administrator.create({ name, surname })
    .then(administrator => {
        res.status(200).json({ result: { administrator }, error: null })
    })
    .error(error => {
        res.status(404).json({ result: null, error })
    })
}