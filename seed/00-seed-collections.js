
const booksRawData = require('../book.json');
const Book = require('../models/book.js');

// import mongoose from 'mongoose';
const mongoose = require('../config/database.js')

const bookData = booksRawData.map((book) => {
    return {
        title: book.title,
        author: book.author,
        year: book.year
    }
})

const bookDatabase = async () => {
    try {
        await Book.deleteMany()
        await Book.create(bookData)
        mongoose.disconnect();
        console.log(`Book data seeded `)

    } catch (error) {
        res.status(403).json({
        error: error.message,
        message: `There was an error adding the Books`
        })
    }
}

bookDatabase()




