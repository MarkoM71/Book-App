import mongoose from 'mongoose'

// Shortcut to mongoose.connection object
const db = mongoose.connection

// Connect to the database
// console.log('Database URI:', process.env.DATABASE_URI);
mongoose.connect(process.env.DATABASE_URI);


db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

export default mongoose