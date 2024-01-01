import 'dotenv/config.js'
import './config/database.js'

//NPM Packages
import express from 'express'
import cors from 'cors'

//Import Routers Here


const app = express()
const PORT = process.env.PORT || 3000


// Middleware (express.json(), cors)
app.use(express.json())
app.use(cors())


//Set up Routes Here


// Set up the server to listen on a port
app.listen(PORT, function() {
    console.log(`App running on ${PORT} port`)
})
