import express from 'express';
import { createUser, editUser, addFavoriteBook, removeFavoriteBook } from '../controllers/users.js'; 

const router = express.Router();

//Route to Create a new User
router.post('/', createUser);

//Route to Edit a User
router.put('/:userId', editUser);

//Route to Get all users


//Route to add a favorite book
router.post('/favorites', addFavoriteBook);

//Route to remove a favorite book
router.patch('/favorites', removeFavoriteBook);

export default router;


//editUser,