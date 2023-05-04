const mongoose = require('mongoose')

async function connect(MONGO_URI) {
    try {
        await mongoose.connect(MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Database is connected'))
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = { connect } 