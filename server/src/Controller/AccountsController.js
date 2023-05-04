const Accounts = require('../module/Accounts')

class AccountsController {

    async SignUp(req, res, next) {
        const newUser = new Accounts({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
       })
        try {
           await newUser.save()
           res.status(200).send(req.body)
           
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
            next()
        }
    }

    async Login(req, res, next) {
        try {
           const userAuth =  await Accounts.find({
                userName: req.body.userName,
                password: req.body.password,

            })
            .then(data => {
               if(data.length > 0 ) {
                    return res.status(200).send(data);
                }else {
                    return res.status(401).send({
                    error: 'login failed'
                })
               }
            })
            next()
            
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
            next()
        }
    }
}

module.exports = new AccountsController