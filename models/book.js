import mongoose from 'mongoose' 

const bookSchema = mongoose.Schema({
    title: { type: String, unique: true, required: true },
    author: { type: String, required: true },
    year: { type: String, required: true }
    
})

const Book = mongoose.model('Book', bookSchema)

export default Book




//imagePath: { type: String}