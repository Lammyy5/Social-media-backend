const router = require('express').Router()
const {
	getAllUsers,
	getUserById,
	createUser,
	deleteUserById,
    updateUserById,
} = require('../../controllers/user')

router.route('/')
.get(getAllUsers)
.post(createUser)

router
	.route('/:userId')
	.get(getUserById)
	.put(updateUserById)
	.delete(deleteUserById)


module.exports = router
