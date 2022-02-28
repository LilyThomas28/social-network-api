const router = require('express').Router();
// add routes for users
const {
    getAllUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/usersController');

// /api/users  :
router.route('/')
    // GET all users
    .get(getAllUsers)
    // POST a new user:
    .post(createNewUser);

// /api/users/:userId
router.route('/:id')
    // GET a single user by its _id and populated thought and friend data
    .get(getSingleUser)
    // PUT to update a user by its _id
    .put(updateUser)
    // DELETE to remove user by its _id
    .delete(deleteUser);
    
// /api/users/:userId/friends/:friendId  :
router.route('/:userId/friends/:friendId')
    // POST to add a new friend to a user's friend list
    .post(addFriend)
    // DELETE to remove a friend from a user's friend list
    .delete(deleteFriend);

module.exports = router;