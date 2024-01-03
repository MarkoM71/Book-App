import User from '../models/user.js'
import Book from '../models/book.js'; 

//Create User
async function createUser(req, res) {
    try {
        const { name, email } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ name, email });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get all Users
async function getAllUsers(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Edit User Works
// Controller function to edit a user
async function editUser(req, res) {
    const userId = req.params.userId; // Assuming you get the user's ID from the URL parameters
    const updateData = req.body; // The new data for the user

    try {
        // Find the user by ID and update
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete a User

//Add a favorite Book Works
async function addFavoriteBook(req, res) {
    const { userId, bookId } = req.body; // Assuming you get these from the request body

    try {
        // Check if the book exists
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Find the user and add the book to favorites if it's not already there
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.favorites.includes(bookId)) {
            user.favorites.push(bookId);
            await user.save();
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function removeFavoriteBook(req, res) {
    const { userId, bookId } = req.body;

    try {
        // Find the user and remove the book from favorites
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Filter out the bookId from the favorites array
        user.favorites = user.favorites.filter(favorite => !favorite.equals(bookId));
        await user.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export {
    createUser,
    getAllUsers,
    editUser,
    addFavoriteBook,
    removeFavoriteBook
}




//Remove User



//Edit User

