import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export default async function connect() {
    if (!MONGODB_URI) {
        throw new Error('No MONGODB_URI found. Make sure it is defined in api/.env.local');
    }

    mongoose.connection.on('connected', () => {
        console.log('Connection to database established.')
    })

    mongoose.connection.on('error', e => {
        console.error('Connection error: ', e);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Lost connection to database.')
    })

    const connection = await mongoose.connect(MONGODB_URI)
    .catch(e => {
        console.error("Failed to connect to database: ", e);
    })

    return connection;
}
