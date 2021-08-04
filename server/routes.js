const express = require('express')

const router = express.Router()

router.get('/get-page', (req, res) => {
  res.json({ data: 'get-page' })
})

module.exports = router
