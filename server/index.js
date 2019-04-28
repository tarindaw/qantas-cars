const express = require('express')
const fs = require('fs')
const port = process.env.PORT || 4000
const app = express()

const router = express.Router()

const getFAQsTitles = faqs => {
    const faqsTitles = []
    Object.entries(faqs).forEach(
        ([key, value]) => faqsTitles.push(value.title)
    )
    return faqsTitles
}

const getDetailsByTitle = (faqs, title) => {
    let selectedFaq = {}
    Object.entries(faqs).forEach(
        ([key, value]) => value.title === title ? selectedFaq = faqs[key] : ''
    )
    return selectedFaq
}

router.get('/faq', (req, res) => {
    fs.readFile('FAQS.json', (err, data) => {
        if (err) throw err
        const faqs = JSON.parse(data)
        const title = decodeURIComponent(req.query['title'])
        res.json(getDetailsByTitle(faqs, title))
    })
})

router.get('/faqs/titles', (req, res) => {
    fs.readFile('FAQS.json', (err, data) => {
        if (err) throw err
        const faqs = JSON.parse(data)
        res.json(getFAQsTitles(faqs))
    })
})

app.use('/api', router)

app.use('*', (req, res) => {
    res.status(400).send('404 Page Not Found.')
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:4000')
})
