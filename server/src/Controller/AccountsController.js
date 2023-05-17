const Accounts = require('../module/Accounts')

class AccountsController {

    async SignUp(req, res, next) {
        try {
            await Accounts.findOne({ userName: req.body.userName })
            .then(data => {
                if(data) {
                    return res.send('Username has been exist')
                }else { 
                    const newUser = new Accounts({
                        userName: req.body.userName,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                    })

                    return newUser
                }
            })
            .then(result => {
                result.save()
                res.status(200).send(req.body)
            })
        }
        catch (error) {
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
                    error: 'Login failed'
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

    async EditAccount (req, res, next) {
        try {
           const update =  await Accounts.updateOne({ _id: req.query.id}, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        }).then(data => {
            res.status(200).send(data)
        })
        } catch (error) {
            res.status(500).send(error)
            next()
        }
    }
}

module.exports = new AccountsController