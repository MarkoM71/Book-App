//SEEDING CODE NOT OPERATIONAL, LEFT HERE FOR POSSIBLE FUTURE USE

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
    }
}

bookDatabase();


