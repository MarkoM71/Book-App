import express from 'express' 
const router = express.Router() 

// Import the movie controller
import { getBooks, createBook, updateBook, removeBook } from '../controllers/books.js' 

// Get Books
router.get('/', async (req, res) => {
    try {
        const books = await getBooks()

        res.status(200).json({
            books
        })
    } catch (error) {
        res.status(403).json({
            error: error,
            message: `There was an error getting the Books`
        })
    }
}) 

//Create Books
router.post('/', async (req, res) => {
    try {
        const bookPayload = req.body
        const newBook = await createBook(bookPayload)

        res.status(200).json({
            newBook
        })
    } catch (error) {
        res.status(403).json({
            error: error,
            message: `There was an error creating a Book`
        })
    }
})

//Update A Book
router.put('/:bookId', async function(req, res) {
    try {
        const updates = req.body
        const id = req.params.bookId
        const updatedBook = await updateBook(id, updates)

        res.status(200).json({
            updatedBook
        })
    } catch (error) {
        res.status(403).json({
            error: error,
            message: `There was an error updating a Book`
        })
    }
})

//Delete A Book
router.delete('/:bookId', async function(req, res) {
    try {
        const id = req.params.bookId
        const deletedBook = await removeBook(id)

        res.status(200).json({
            deletedBook
        })
    } catch (error) {
        res.status(403).json({
            error: error,
            message: `There was an error deleting a Book`
        })
    }
})

export default router 