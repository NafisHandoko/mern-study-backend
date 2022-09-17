const express = require('express')
const router = express.Router()
const { getQuotes, getQuote, postQuote, updateQuote, deleteQuote } = require('../controllers/c_quote')


router.get('/', getQuotes)
router.get('/:id', getQuote)
router.post('/', postQuote)
router.patch('/:id', updateQuote)
router.delete('/:id', deleteQuote)

module.exports = router