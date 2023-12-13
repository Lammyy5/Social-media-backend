const router = require('express').Router()
const {
	getAllThoughts,
	getThoughtsById,
	createThought,
	deleteThought,
} = require('../../controllers/thoughts');

router.route('/')
.get(getAllThoughts)
.post(createThought)

router
	.route('/:thoughtId')
	.get(getThoughtsById)
	.put(updateThoughtById)
	.delete(deleteThought)

    module.exports = router
