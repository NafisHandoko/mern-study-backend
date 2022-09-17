const Quote = require('../models/m_quote')

const getQuotes = async (req, res) => {
    const allQuotes = await Quote.find().sort({createdAt: -1});
    res.json(allQuotes)
}

const getQuote = async (req, res) => {
    const { id } = req.params
    const quote = await Quote.findById(id)
    if(!quote){
        res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(quote)
}

const postQuote = async (req, res) => {
    const {quote, author} = req.body
    try{
        const quoteRes = await Quote.create({quote, author})
        res.status(200).json(quoteRes)
    }catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const updateQuote = async (req, res) => {
    const { id } = req.params
    const updatedQuote = await Quote.findByIdAndUpdate(id, req.body)
    if(!updatedQuote){
        res.status(404).json({error: 'no such quote'})
    }
    res.status(200).json(updatedQuote)
}

const deleteQuote = async (req, res) => {
    const { id } = req.params
    const deletedQuote = await Quote.findByIdAndDelete(id)
    if(!deletedQuote){
        res.status(404).json({error: 'no such quote'})
    }
    res.status(200).json(deletedQuote)
}

module.exports = {
    getQuotes,
    getQuote,
    postQuote,
    updateQuote,
    deleteQuote
}