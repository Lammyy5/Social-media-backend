const router = require('express').Router()
const {
	getAllThoughts,
	getThoughtsById,
	createThought,
	deleteThought,
} = require('/Users/mar/Bootcamp/Homework-Projects/HW18/Social-media-backend/controllers/thought.js')

router.route('/')
.get(getAllThoughts)
.post(createThought)

router
	.route('/:thoughtId')
	.get(getThoughtsById)
	.put(updateThoughtById)
	.delete(deleteThought)

    module.exports = router
