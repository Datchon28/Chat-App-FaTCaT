const Accounts = require('../module/Accounts')

class SearchController {

    async user(req, res, next) {
        const params = req.query
        try {
            await Accounts.find({
                userName: params.userName
            })
            .then(data=> {
                console.log(data);
                res.status(200).send(data)
            })
        } catch (error) {
            res.status(500).send(error)
            next()
        }
        
    }
}

    module.exports = new SearchController