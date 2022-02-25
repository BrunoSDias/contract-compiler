const compileContract = require('../compileContract.js');
const alterMetadata = require('../alterMetadata.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/compile_contract', (req, res, next) => {
  const metadata = req.body.metadata;
  const collectionId = req.body.collectionId;

  alterMetadata.change(metadata, collectionId)
  .then((filePath) => {
    res.json({
      contract: compileContract.instantiateContract(filePath)
    })
  })
  .catch((err) => {
    res.json({
      error: err
    })
  })
})

module.exports = router;
