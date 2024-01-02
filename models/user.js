import mongoose from 'mongoose' 

const userSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    favorites: { type: Array }
})

const User = mongoose.model('User', userSchema)

export default User