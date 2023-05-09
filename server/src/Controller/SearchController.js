const Accounts = require('../module/Accounts')

class SearchController {

    async user(req, res, next) {
        try {
            await Accounts.find({
                userName: req.query.userName
            })
            .then(data=> {
                res.status(200).send(data)
            })
        } catch (error) {
            res.status(500).send(error)
            next()
        }
        
    }
}

    module.exports = new SearchController