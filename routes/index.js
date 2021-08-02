var express = require('express');
var router = express.Router();
// const Contact = require('../models/contact').Contact
const { Contact } = require("../models/contact");

/* GET home page. */
router.get("/", function(req, res, next) {
  Contact.find({}, (err, contact) =>{
   res.render("index", { title: "Our Contacts", contacts });
  });
});

module.exports = router;
