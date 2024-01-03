
import booksRawData from '../book.json' assert { type: 'json' };
import Book from '../models/book.js';
import mongoose from '../config/database.js';

const bookData = booksRawData.map((book) => {
    return {
        title: book.title,
        author: book.author,
        year: book.year
    }
})

const bookDatabase = async () => {
    try {
        await Book.deleteMany();
        await Book.create(bookData);
        mongoose.disconnect();
        console.log(`Book data seeded `);
    } catch (error) {
        console.error('Error adding the Books:', error);
        // Updated error handling for standalone script
    }
}

bookDatabase();



// import { booksRawData } from '../book.json'
// const booksRawData = require('../book.json');
// import Book from '../models/book.js'
// const Book = require('../models/book.js');
// import mongoose from '../config/database.js'

// import mongoose from 'mongoose';


// const bookData = booksRawData.map((book) => {
//     return {
//         title: book.title,
//         author: book.author,
//         year: book.year
//     }
// })

// const bookDatabase = async () => {
//     try {
//         await Book.deleteMany()
//         await Book.create(bookData)
//         mongoose.disconnect();
//         console.log(`Book data seeded `)

//     } catch (error) {
//         res.status(403).json({
//         error: error.message,
//         message: `There was an error adding the Books`
//         })
//     }
// }

// bookDatabase()