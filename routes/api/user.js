const router = require('express').Router()
const {
	getAllUsers,
	getUserById,
	createUser,
	deleteUserById,
	updateUserById,
} = require('/Users/mar/Bootcamp/Homework-Projects/HW18/Social-media-backend/controllers/user.js')

router.route('/')
.get(getAllUsers)
.post(createUser)

router
	.route('/:userId')
	.get(getUserById)
	.put(updateUserById)
	.delete(deleteUserById)


module.exports = router
