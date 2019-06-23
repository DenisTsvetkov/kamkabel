const{ Profile } = require('../models'); 

exports.create = ({ body: { UserId, name, middle_name, surname, phone, sex } }, res) => {

    Profile.create({ UserId, name, middle_name, surname, phone, sex })
    .then(Profile => {
        res.status(200).json({ result: { Profile }, error: null })
    })
    .catch(error => {
        res.status(404).json({ result: null, error: { detail: error.parent.constraint } })
    })
}