import express from 'express';
import { createUser, getAllUsers, getUserByNameAndEmail, editUser, deleteUser, addFavoriteBook, removeFavoriteBook, loginUser } from '../controllers/users.js'; 

const router = express.Router();

//Route to Create a new User
router.post('/', createUser);
router.post('/login', loginUser)

//Route to Get all users
router.get('/', getAllUsers);

//Route to Get One User //Passing the user ID in the URL parameter.
router.post('/findOne', getUserByNameAndEmail);

//Route to Edit a User
router.put('/:userId', editUser);

//Route to Delete a User
router.delete('/:userId', deleteUser);


//Route to add a favorite book
router.post('/favorites', addFavoriteBook);

//Route to remove a favorite book
router.patch('/favorites', removeFavoriteBook);

export default router;


//editUser,