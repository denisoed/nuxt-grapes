const express = require('express')
const Page = require('./models/page');

const router = express.Router()

router.post('/create', (req, res) => {
  const page = new Page(req.body);
  page.save();
  res.status(201).send(page);
})

router.get('/get-pages', (req, res) => {
  Page.find((error, pages) => {
    if (error) {
      return res.status(500).send(error);
    } else {
      return res.json(pages);
    }
  });
})

router.get('/get-page', (req, res) => {
  const pageId = req.params.pageId;
  Page.findOne({ id: pageId }, (error, page) => {
    if (error) {
      return res.status(500).send(error);
    } else {
      return res.json(page);
    }
  });
})

router.put('/save', (req, res) => {
  const pageId = req.params.pageId;
  Page.findOne({ id: pageId }, (error, page) => {
    if (error) {
      res.status(500).send(error);
      return;
    }

    if (page) {
      page.html = req.body.html;
      page.css = req.body.css;
      
      page.save();

      res.json(page);
      return;
    }

    res.status(404).json({
      message: 'page with id ' + pageId + ' was not found.'
    });
  });
})

module.exports = router
