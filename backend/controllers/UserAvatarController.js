const { UserAvatar } = require('../models');

// exports.create = ({ body: { UserId, avatar } }, res) => {
//     UserAvatar.findOrCreate({
//         where:{
//             UserId
//         },
//     })
//     .then(([UserAvatar, created])=>{
//         if(!created){
//             UserAvatar.update({ avatar })
//             //res.status(200).json({ result: { UserAvatar }, error: null })
//         }
//         else{
//             //res.status(200).json({ result: { UserAvatar }, error: null });
//         }
//     })

// }

exports.create = ({ body: { UserId, avatar } }, res) => {
    UserAvatar.create({
        UserId,
        avatar
    })
    .then(UserAvatar => {
        res.status(200).json({ result: { UserAvatar }, error: null })
    })
    .catch(error => {
        res.status(200).json({ result: null, error })
    })
}

