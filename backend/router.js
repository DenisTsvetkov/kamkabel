
module.exports = (app, jwt)=>{
    
    app.post('/new-user', (req,res)=>{
      console.log('Новый пользователь ', req.body);
    });


    app.post('/login', (req, res)=>{
      jwt.sign({}, 'secretkey', (err, token)=>{
        res.json({
          token
        })
      })
    })
    //app.post('/new_message', );
};