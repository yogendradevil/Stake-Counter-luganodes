const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error(error);
        console.log('Error occurred while connecting to the database');
    }
}

module.exports = connectToDatabase;