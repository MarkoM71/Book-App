import Book from '../models/book.js'

//Read 
const getBooks = () => {
    return Book.find({})
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
}

//Create
const createBook = (book) => {
    return Book.insertMany(book)
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
}

//Update
const updateBook = (id, updateData) => {
    return Book.findByIdAndUpdate(id, updateData, { new: true }) 
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    });
}

//Delete
const removeBook = (id) => {
    return Book.deleteOne({ _id: id })    
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
} 

export {
    getBooks,
    createBook,
    updateBook,
    removeBook
}