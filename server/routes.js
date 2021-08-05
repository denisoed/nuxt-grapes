const express = require('express')
const Page = require('./models/page');

const router = express.Router()

router.post('/save', (req, res) => {
  const page = new Page(req.body);
  page.save();
  res.status(201).send(page);
})

module.exports = router
