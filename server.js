import 'dotenv/config.js'
import './config/database.js'

//NPM Packages
import express from 'express'
import cors from 'cors'

//Import Routers Here
import booksRouter from './routes/books.js'
import usersRouter from './routes/users.js'


const app = express()
const PORT = process.env.PORT || 3000


// Middleware (express.json(), cors)
app.use(express.json())
app.use(express.urlencoded()) 
app.use(cors())


//Set up Routes Here
app.use('/books', booksRouter)
app.use('/users', usersRouter)


// Set up the server to listen on a port
app.listen(PORT, function() {
    console.log(`App running on ${PORT} port`)
})
