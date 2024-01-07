import mongoose from 'mongoose' 
const { Schema } = mongoose;


const userSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    favorites: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Book'  
    }]
});

const User = mongoose.model('User', userSchema)

export default User


