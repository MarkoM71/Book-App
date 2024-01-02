import mongoose from 'mongoose' 

const bookSchema = mongoose.Schema({
    title: { type: String, unique: true, required: true },
    author: { type: String, required: true },
    year: { type: String, required: true }
    //imagePath: { type: String}
})

const Book = mongoose.model('Book', bookSchema)

export default Book

