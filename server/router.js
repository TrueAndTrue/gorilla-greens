const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.put('/api/checkitems', controller.checkItems);
router.post('/api/payment', controller.payment);
  
module.exports = router;