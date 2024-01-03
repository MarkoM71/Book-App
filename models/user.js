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



// import bookSchema from './book';
//Better had it by reference, and grabbed by Id's query the book data that you might want to look at. 